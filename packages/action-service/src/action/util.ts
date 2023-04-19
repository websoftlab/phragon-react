import type { ActionService } from "@phragon-util/action-service";
import type { TranslateActionProps } from "./translate";
import type { Modal } from "@phragon-react/modal";
import type { Lexicon } from "@phragon/lexicon";
import type { To } from "history";

export type ReqActionProps<
	Req extends {} = any,
	BaseProps extends { name?: string; data?: any; parameters?: any } = { name?: string; data?: any; parameters?: any }
> = BaseProps & {
	req: Req;
	reqParameters?: Record<keyof Req, string>;
	reqPost?: (keyof Req)[] | "*";
};

export function translate(service: ActionService, options: Lexicon.TranslateOptions) {
	if (service.hasAction("translate")) {
		return service.emit<TranslateActionProps, string>("translate", options);
	} else {
		const { id, alternative, replacement } = options;
		let message = id;
		if (typeof alternative === "function") {
			message = alternative(id);
		} else if (alternative) {
			message = alternative;
		}
		if (replacement) {
			return message.replace(/\{(.+?)}/g, (origin, name) => {
				name = name.trim();
				return replacement.hasOwnProperty(name) ? replacement[name] : origin;
			});
		} else {
			return message;
		}
	}
}

export function toast(service: ActionService, id: string, level: string, text: string) {
	if (service.hasAction("toast")) {
		service.emit("toast", {
			id,
			level,
			text,
		});
	} else if (level === "error") {
		console.error(`[${id}] ${text}`);
	} else {
		console.log(`[${id}] ${level} - ${text}`);
	}
}

export function confirmation(
	service: ActionService,
	id: string,
	message: string | Lexicon.TranslateOptions,
	cb: Function
) {
	if (typeof message !== "string") {
		message = translate(service, message);
	}
	if (service.hasAction("modal.confirm")) {
		service.emit<Modal.OpenConfirmActionProps>("modal.confirm", {
			id,
			text: message,
			action: {
				id: "confirm",
				name: translate(service, { id: "button.ok", alternative: "Ok" }),
				variant: "primary",
				onClick() {
					service.emit("modal.close", { id });
					cb();
				},
			},
		});
	} else if (window.confirm(message)) {
		cb();
	}
}

export function makeReqProps<
	Req extends {} = any,
	BaseProps extends { name?: string; data?: any; parameters?: any } = { name?: string; data?: any; parameters?: any }
>(props: ReqActionProps<Req, BaseProps>) {
	let { req = {}, reqPost, reqParameters, data, parameters, ...rest } = props;

	if (rest.name && reqParameters) {
		const keys = Object.keys(reqParameters) as (keyof Req)[];
		if (!parameters) {
			parameters = {};
		}
		for (const key of keys) {
			const name = reqParameters[key];
			parameters[name] = (req as any)[key];
		}
	}

	if (reqPost) {
		if (reqPost === "*") {
			reqPost = Object.keys(req) as (keyof Req)[];
		}
		if (Array.isArray(reqPost)) {
			if (!data) {
				data = {};
			}
			for (const key of reqPost) {
				data[key] = (req as any)[key];
			}
		}
	}

	return {
		data,
		parameters,
		...rest,
	};
}

export function rand(prefix: string = "") {
	return prefix + Math.random().toString(32).substring(2);
}

export function isEmpty<T = any>(value: T[] | string | number | null | undefined): boolean {
	return (
		value == null ||
		(typeof value === "string" && value.length === 0) ||
		(Array.isArray(value) && value.length === 0)
	);
}

export function isNotEmpty<T = any>(value: T[] | string | number | null | undefined): boolean {
	return !isEmpty<T>(value);
}

export function createPath(to?: To) {
	if (!to) {
		return "/";
	}
	if (typeof to === "string") {
		return to;
	}
	let { pathname, search, hash } = to;
	if (pathname == null) {
		pathname = "/";
	}
	if (search && search !== "?") {
		pathname += search.charAt(0) === "?" ? search : `?${search}`;
	}
	if (hash && hash !== "#") {
		pathname += hash.charAt(0) === "#" ? hash : `#${hash}`;
	}
	return pathname;
}
