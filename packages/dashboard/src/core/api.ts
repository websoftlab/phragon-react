import type { AxiosRequestConfig, Method } from "axios";
import type { Dashboard } from "@phragon/plugin-dashboard";
import type { DashboardService } from "../DashboardService";
import type { TranslateActionProps } from "./translate";
import type { Modal } from "@phragon-react/modal";
import { isPlainObject } from "@phragon-util/plain-object";
import { emitAction } from "../util";
import { isNotEmpty, rand, isEmpty, makeReqProps } from "./util";

export interface ApiActionProps {
	url?: string | string[];
	id?: string;
	method?: string;
	data?: any;
	action?: Dashboard.Action;
	config?: AxiosRequestConfig;
	abortLastRequest?: boolean;
	name?: string;
	parameters?: any;
	catchError?: boolean;
	complete?: (successfully: boolean, payload?: any) => void;
}

export interface ApiReqActionProps<Req extends {} = any> extends ApiActionProps {
	req: Req;
	reqParameters: Record<keyof Req, string>;
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

type Dump = Record<string, DumpOption>;

interface DumpOption extends ApiStat {
	controller: AbortController;
}

function apiReq<Req extends {} = any>(
	service: DashboardService,
	dump: Dump,
	apiUrlPrefix: string,
	props: ApiReqActionProps<Req>
) {
	return api(service, dump, apiUrlPrefix, makeReqProps(props));
}

function translate(service: DashboardService, id: string, alternative: string) {
	return service.emit<TranslateActionProps, string>("translate", { id, alternative });
}

// dashboard:api
function api(service: DashboardService, dump: Dump, apiUrlPrefix: string, props: ApiActionProps): string | null {
	function confirmation({ message, data }: { message?: string; data?: any }) {
		const id = "query-confirm";
		const okButton = translate(service, "button.ok", "Ok");
		if (!message) {
			message = translate(service, "text.confirmationRequired", "Confirmation required");
		}
		if (!data) {
			data = { confirm: true };
		}
		service.emit<Modal.OpenConfirmActionProps>("modal.confirm", {
			id,
			text: message,
			action: {
				id: "confirm",
				name: okButton,
				variant: "primary",
				onClick() {
					service.emit("modal.close", { id });
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
					api(service, dump, apiUrlPrefix, props);
				},
			},
		});
	}

	function fallback(id: string, level: string, text: string) {
		service.emit("toast", {
			id,
			level,
			text,
		});
		const { complete, catchError } = props;
		if (typeof complete === "function") {
			if (catchError) {
				complete(false, new Error(text));
			} else {
				complete(false);
			}
		}
	}

	let valid = isPlainObject(props);
	if (valid) {
		const isUrl = !isEmpty(props.url);
		const isName = !isEmpty(props.name) && typeof props.name === "string";
		if (isName) {
			if (isUrl) {
				valid = false;
			} else {
				valid = service.hasUrlName(`dashboard:api.${props.name}`);
			}
		} else if (!isUrl) {
			valid = false;
		}
	} else {
		valid = false;
	}

	if (!valid) {
		fallback(
			"system-error.api",
			"error",
			translate(service, "error.api.request.props", "Invalid properties for 'api' request")
		);
		return null;
	}

	let {
		url,
		name,
		parameters = {},
		id,
		config: configProp,
		method = "get",
		data,
		action,
		catchError = false,
		abortLastRequest = false,
	} = props;
	let toUrl: string;
	if (name) {
		toUrl = service.makeUrl(`dashboard:api.${name}`, {
			...parameters,
		});
	} else {
		if (typeof url === "string" && url.startsWith(apiUrlPrefix)) {
			toUrl = url;
		} else {
			toUrl = service.makeUrl("dashboard:api", {
				data: {
					"*": Array.isArray(url) ? url : String(url).split("/"),
				},
			});
		}
	}

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
				translate(service, "error.api.request.wait", "Last request not completed, please wait...")
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
		service.emit("toast", {
			text: (err && err.message) || "Unknown error",
			id: `api-callback-error:${id}-${n++}`,
			level: "error",
		});
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
		url: toUrl,
		aborted: false,
		complete: false,
		failure: false,
		controller: new AbortController(),
	};

	dump[id] = dumpOption;

	function complete(result: Dashboard.APIResponse, error?: Error) {
		dumpOption.complete = true;
		dumpOption.error = error;
		if (dumpOption.aborted) {
			done(false);
			return;
		}
		const { ok, codeName, message, actions } = result;
		let { payload } = result;
		if (codeName === "confirmationError") {
			return confirmation(payload || {});
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
			service.emit("toast", {
				text: message,
				id: (ok ? "info-" : "error-") + id,
				level: ok ? "info" : "error",
			});
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

	service.api.services
		.http(toUrl, config)
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

export function addApiActions(service: DashboardService) {
	const dump: Dump = {};
	const apiUrlPrefix = service.makeUrl("dashboard:api", { data: { "*": [] } });
	return service.addActions({
		api: (props: ApiActionProps) => api(service, dump, apiUrlPrefix, props),
		"api.req": (props: ApiReqActionProps) => apiReq(service, dump, apiUrlPrefix, props),
		"api.abort": (props: ApiAbortActionProps) => abort(dump, props),
		"api.stat": (props: ApiAbortActionProps) => stat(dump, props),
	});
}
