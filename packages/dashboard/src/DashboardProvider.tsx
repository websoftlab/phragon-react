import type { ReactNode } from "react";
import type { URL } from "@phragon/make-url";
import type { Pattern } from "@phragon/path-to-pattern";
import type { DashboardStoreState } from "@phragon/plugin-dashboard";
import React from "react";
import { DashboardService } from "./DashboardService";
import { useApiContext } from "@phragon/render-driver-react/app";
import { __isWeb__ } from "@phragon-util/global-var";
import { useCreateActionService, ActionServiceContext } from "@phragon-react/action-service";
import { addStateActions } from "./action";
import { pathToPattern } from "@phragon/path-to-pattern";
import { pattern } from "@phragon/make-url";
import { DashboardContext } from "./context";

function createUrlPattern(dashboard: DashboardStoreState["dashboard"] = {}) {
	const { path: homePage = "/", patterns = {} } = dashboard;

	if (!patterns["dashboard:web"]) patterns["dashboard:web"] = homePage === "/" ? "/*" : `${homePage}/*`;
	if (!patterns["dashboard:api"]) patterns["dashboard:api"] = homePage === "/" ? "/_api/*" : `${homePage}/_api/*`;

	const keys = Object.keys(patterns);
	for (const key of keys) {
		pattern.set(key, pathToPattern(patterns[key]) as Pattern);
	}

	return () => {
		for (const key of keys) {
			pattern.del(key);
		}
	};
}

export function DashboardProvider(props: { children: ReactNode }) {
	const api = useApiContext();
	const makeUrl: URL.Handler = React.useCallback((url) => api.makeUrl(url), [api]);

	const dashboardState: DashboardStoreState["dashboard"] | undefined = api.app.state.dashboard;
	React.useEffect(() => createUrlPattern(dashboardState), [dashboardState]);

	const homePage: string = dashboardState?.path || "/";
	const actionService = useCreateActionService({
		translator: api.services.translator,
		http: api.services.http,
		navigator: api.services.navigator,
		apiName: "dashboard:api",
		makeUrl,
		homePage,
	});

	if (!api.services.hotkeys) {
		if (__isWeb__()) {
			api.services.hotkeys = actionService.hotkeys;
		}
	}

	const dashboard = React.useMemo(() => new DashboardService(actionService, api), [actionService]);
	if (!api.services.dashboard) {
		api.services.dashboard = dashboard;
	}

	React.useEffect(() => addStateActions(dashboard), [dashboard]);
	return (
		<ActionServiceContext.Provider value={actionService}>
			<DashboardContext.Provider value={dashboard}>{props.children}</DashboardContext.Provider>
		</ActionServiceContext.Provider>
	);
}
