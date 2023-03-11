import type { DashboardService } from "../DashboardService";
import { addCallbackAction } from "./callback";
import { addApiActions } from "./api";
import { addTranslateActions } from "./translate";
import { addRouteActions } from "./route";
import { addStateActions } from "./state";

export { addCallbackAction, addApiActions, addTranslateActions, addRouteActions, addStateActions };
export type { CallbackActionProps } from "./callback";
export type { ApiAbortActionProps, ApiActionProps, ApiReqActionProps, ApiStatusActionProps, ApiStat } from "./api";
export type { TranslateActionProps, TranslateLanguageActionProps } from "./translate";
export type {
	RouteBackActionProps,
	RouteForwardActionProps,
	RouteGotoActionProps,
	RouteGotoReqActionProps,
	RouteHomeActionProps,
	RouteReloadActionProps,
} from "./route";
export type { StateActionProps, StateRebootActionProps, StateReloadActionProps, StateUpdateActionProps } from "./state";

export interface ApiCoreOptions {}

export function addCoreActions(service: DashboardService, _options: ApiCoreOptions = {}) {
	const undo = [
		addApiActions(service),
		addStateActions(service),
		addCallbackAction(service),
		addTranslateActions(service),
		addRouteActions(service),
	];
	return () => {
		undo.forEach((cb) => cb());
	};
}
