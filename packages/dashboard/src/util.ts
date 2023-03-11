import type { Dashboard } from "@phragon/plugin-dashboard";
import type { DashboardService } from "./DashboardService";
import { isPlainObject } from "@phragon-util/plain-object";

export function emitAction<Prop extends {} = any, Result = void>(
	service: DashboardService,
	action: Dashboard.Action,
	andProp?: Partial<Prop>
): Result {
	const { name, props } = getActionObject<Prop>(action, andProp);
	return service.emit<Prop, Result>(name, props);
}

export function createAction<Prop extends {} = any, Result = void>(
	service: DashboardService,
	action: Dashboard.Action,
	andProp?: Partial<Prop>
): () => Result {
	return () => {
		return emitAction<Prop, Result>(service, action, andProp);
	};
}

export function getActionObject<P extends {} = any>(action: Dashboard.Action, andProp?: Partial<P>) {
	let name: string,
		props = <P>{};

	if (typeof action === "string") {
		name = action;
	} else if (Array.isArray(action)) {
		name = action[0];
		if (isPlainObject(action[1])) {
			props = action[1];
		}
	} else {
		name = action.name;
		if (isPlainObject(action.props)) {
			props = action.props;
		}
	}
	if (andProp) {
		props = { ...props, ...andProp };
	}

	return { name, props };
}
