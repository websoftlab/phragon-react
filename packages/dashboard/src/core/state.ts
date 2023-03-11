import type { DashboardStoreState } from "@phragon/plugin-dashboard";
import type { DashboardService } from "../DashboardService";

export interface StateActionProps {}

export interface StateRebootActionProps<State extends {} = DashboardStoreState> {
	init?: boolean;
	callback?: (success: boolean, state?: State) => void;
}

export interface StateReloadActionProps {
	init?: boolean;
	data: any;
}

export interface StateUpdateActionProps {
	data: any;
}

function state<State extends {} = DashboardStoreState>(dashboard: DashboardService, _props: StateActionProps): State {
	return dashboard.api.app.state;
}

let controller: AbortController | null = null;

function reboot<State extends {} = DashboardStoreState>(
	dashboard: DashboardService,
	props: StateRebootActionProps<State> = {}
) {
	const app = dashboard.api.app;
	if (controller) {
		controller.abort();
	}

	type ResData = { ok: false; message: string } | { ok: true; payload: State };

	function done(data: ResData) {
		controller = null;
		if (data.ok) {
			const state = data.payload;
			if (typeof props.callback === "function") {
				props.callback(true, state);
			}
			app.reload(state, props.init);
		} else {
			dashboard.emit("dashboard.toast", {
				text: data.message || "Unknown error",
				id: "api-state-error",
				level: "error",
			});
		}
	}

	controller = new AbortController();
	dashboard.api.services.http
		.get<ResData>(dashboard.makeUrl("dashboard:api", { "*": ["_", "state"] }), { signal: controller.signal })
		.then(({ data }) => {
			done(data);
		})
		.catch((err) => {
			done({ ok: false, message: err.message || "Unknown error" });
		});
}

function reload(dashboard: DashboardService, props: StateReloadActionProps) {
	dashboard.api.app.reload(props.data, props.init);
}

function update(dashboard: DashboardService, props: StateUpdateActionProps) {
	dashboard.api.app.update(props.data);
}

export function addStateActions(service: DashboardService) {
	return service.addActions({
		state: (props: StateActionProps) => state(service, props),
		"state.reboot": (props: StateRebootActionProps) => reboot(service, props),
		"state.reload": (props: StateReloadActionProps) => reload(service, props),
		"state.update": (props: StateUpdateActionProps) => update(service, props),
	});
}
