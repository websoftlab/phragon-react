import type { AxiosInstance, AxiosRequestConfig, Method } from "axios";
import type { ActionNS, ActionService } from "@phragon-util/action-service";
import type { URL } from "@phragon/make-url";
import { isPlainObject } from "@phragon-util/plain-object";
import { emitAction } from "@phragon-util/action-service";
import { translate, confirmation, toast, isNotEmpty, rand, isEmpty, makeReqProps } from "./util";

export interface ApiActionProps {
	url?: string | string[];
	id?: string;
	method?: string;
	data?: any;
	action?: ActionNS.ActionType;
	config?: AxiosRequestConfig;
	abortLastRequest?: boolean;
	name?: string;
	params?: any;
	catchError?: boolean;
	complete?: (successfully: boolean, payload?: any) => void;
}

export interface ApiReqActionProps<Req extends {} = any> extends ApiActionProps {
	req: Req;
	reqParams: Record<keyof Req, string>;
	reqPost: (keyof Req)[] | "*";
}

export interface ApiAbortActionProps {
	id: string;
}

export interface ApiStatusActionProps {
	id: string;
}

export interface ApiStat {
	url: string;
	complete: boolean;
	failure: boolean;
	aborted: boolean;
	error?: Error;
}

export interface ApiActionResponse<Payload = any> {
	ok: boolean;
	codeName?: string;
	message?: string;
	payload?: Payload;
	actions?: ActionNS.ActionType[];
}

type Dump = Record<string, DumpOption>;

interface DumpOption extends ApiStat {
	controller: AbortController;
}

function apiReq<Req extends {} = any>(
	service: ActionService,
	dump: Dump,
	options: AddApiOptions,
	props: ApiReqActionProps<Req>
) {
	return api(service, dump, options, makeReqProps(props));
}

function api(service: ActionService, dump: Dump, options: AddApiOptions, props: ApiActionProps): string | null {
	function confirmQuery({ message, data }: { message?: string; data?: any }) {
		if (!message) {
			message = translate(service, { id: "text.confirmationRequired", alternative: "Confirmation required" });
		}
		if (!data) {
			data = { confirm: true };
		}
		confirmation(service, "query-confirm", message, () => {
			let { method = "get", config = {} } = props;
			method = method.toLowerCase();
			// add query data
			if (method === "post" || method === "put") {
				props.data = {
					...props.data,
					...data,
				};
			} else {
				config.params = {
					...config.params,
					...data,
				};
			}
			// repeat query
			api(service, dump, options, props);
		});
	}

	function fallback(id: string, level: string, text: string) {
		toast(service, id, level, text);
		const { complete, catchError } = props;
		if (typeof complete === "function") {
			if (catchError) {
				complete(false, new Error(text));
			} else {
				complete(false);
			}
		}
	}

	let url = "";
	let valid = isPlainObject(props);
	if (valid) {
		const isUrl = !isEmpty(props.url);
		const isName = !isEmpty(props.name) && typeof props.name === "string";
		const { makeUrl, apiName } = options;
		if (isName) {
			if (isUrl) {
				valid = false;
			} else {
				let name = props.name as string;
				if (!name.startsWith(apiName)) {
					name = `${apiName}.${name}`;
				}
				try {
					url = makeUrl({ name, params: props.params });
				} catch (e) {
					valid = false;
				}
			}
		} else if (!isUrl) {
			valid = false;
		} else if (Array.isArray(props.url)) {
			try {
				url = makeUrl({ name: apiName, params: { "*": props.url } });
			} catch (e) {
				valid = false;
			}
		} else {
			url = String(props.url);
		}
	}

	if (!valid) {
		fallback(
			"system-error.api",
			"error",
			translate(service, { id: "error.api.request.props", alternative: "Invalid properties for 'api' request" })
		);
		return null;
	}

	let { id, config: configProp, method = "get", data, action, catchError = false, abortLastRequest = false } = props;
	if (!id) {
		id = rand(`req-`);
	}

	if (dump.hasOwnProperty(id) && !dump[id].complete) {
		if (abortLastRequest) {
			dump[id].aborted = true;
			dump[id].controller.abort();
		} else {
			fallback(
				`warning-${id}`,
				"info",
				translate(service, {
					id: "error.api.request.wait",
					alternative: "Last request not completed, please wait...",
				})
			);
			return id;
		}
	}

	const config: AxiosRequestConfig = {
		...configProp,
		method: String(method).toLowerCase() as Method,
		validateStatus: () => true,
	};

	if (data) {
		if (config.method === "get") {
			config.params = data;
		} else if (isPlainObject(data) && (config.method === "post" || config.method === "put")) {
			config.data = JSON.stringify(data);
			if (!config.headers) {
				config.headers = {};
			}
			config.headers["content-type"] = "application/json";
		} else {
			config.data = data;
		}
	}

	let n = 1;
	const toastError = (err?: any) => {
		toast(service, `api-callback-error:${id}-${n++}`, "error", (err && err.message) || "Unknown error");
	};

	const doneFn = props.complete;
	const done = (successfully: boolean, payload?: any) => {
		if (typeof doneFn === "function") {
			try {
				doneFn(successfully, payload);
				return true;
			} catch (err) {
				toastError(err);
			}
		}
	};

	const dumpOption: DumpOption = {
		url,
		aborted: false,
		complete: false,
		failure: false,
		controller: new AbortController(),
	};

	dump[id] = dumpOption;

	function complete(result: ApiActionResponse, error?: Error) {
		dumpOption.complete = true;
		dumpOption.error = error;
		if (dumpOption.aborted) {
			done(false);
			return;
		}
		const { ok, codeName, message, actions } = result;
		let { payload } = result;
		if (codeName === "confirmationError") {
			return confirmQuery(payload || {});
		}

		if (ok) {
			catchError = false;
		} else if (!payload && catchError) {
			payload = new Error(message || "Unknown error");
		}

		try {
			if (!done(ok, payload)) {
				catchError = false;
			}
		} catch (err) {
			toastError(err);
		}

		if (!catchError && message) {
			toast(service, (ok ? "info-" : "error-") + id, ok ? "info" : "error", message);
		}

		if (action) {
			try {
				emitAction(service, action, payload);
			} catch (err) {
				toastError(err);
			}
		}

		if (isNotEmpty(actions) && Array.isArray(actions)) {
			actions.forEach((action) => {
				try {
					emitAction(service, action);
				} catch (err) {
					toastError(err);
				}
			});
		}
	}

	options
		.http(url, config)
		.then((response) => {
			let { data, status, statusText } = response;

			if (!isPlainObject(data)) {
				data = {
					ok: false,
					message: status === 200 ? "Invalid server answer" : statusText,
				};
			}

			dumpOption.complete = true;
			if (typeof data.ok !== "boolean") {
				data.ok = response.status === 200;
			}

			if (!data.ok && !data.message) {
				data.message = statusText;
			}

			complete(data);
		})
		.catch((error) => {
			dumpOption.failure = true;
			complete({ ok: false, message: error && (error as Error).message }, error);
		});

	return id;
}

function abort(dump: Dump, props: ApiAbortActionProps) {
	const id = props?.id;
	if (dump.hasOwnProperty(id)) {
		dump[id].aborted = true;
		dump[id].controller.abort();
		return true;
	} else {
		return false;
	}
}

function stat(dump: Dump, props: ApiStatusActionProps): ApiStat | null {
	const id = props?.id;
	if (dump.hasOwnProperty(id)) {
		const { controller, ...rest } = dump[id];
		return rest;
	}
	return null;
}

export interface AddApiOptions {
	http: AxiosInstance;
	makeUrl: URL.Handler;
	apiName: string;
}

export function addApiActions(service: ActionService, options: AddApiOptions) {
	const dump: Dump = {};
	return service.addActions({
		api: (props: ApiActionProps) => api(service, dump, options, props),
		"api.req": (props: ApiReqActionProps) => apiReq(service, dump, options, props),
		"api.abort": (props: ApiAbortActionProps) => abort(dump, props),
		"api.stat": (props: ApiAbortActionProps) => stat(dump, props),
	});
}
