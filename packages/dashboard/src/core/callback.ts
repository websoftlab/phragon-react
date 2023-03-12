import type { DashboardService } from "../DashboardService";

export interface CallbackActionProps<T = any, Args = any[]> {
	callback: Function;
	target?: T;
	args?: Args;
}

function callback(service: DashboardService, props: CallbackActionProps, alternative: Function) {
	let { callback, target, args = [] } = props;
	const isT = "hasOwnProperty" in target ? target.hasOwnProperty("target") : typeof target !== "undefined";
	if (typeof callback !== "function") {
		callback = alternative;
	}
	try {
		if (isT) {
			callback.apply(target, args);
		} else {
			callback(...args);
		}
	} catch (err) {
		service.emit("toast", {
			id: "callback-failure",
			level: "error",
			text: (err as any).message || String(err),
		});
	}
}

export function addCallbackAction(service: DashboardService) {
	function callbackIsNotDefined() {
		throw new Error(
			service.emit("translate", {
				id: "dashboard::error.callbackNotDefined",
				alternative: "Callback is not defined",
			})
		);
	}
	return service.addAction("callback", (props: CallbackActionProps) =>
		callback(service, props, callbackIsNotDefined)
	);
}
