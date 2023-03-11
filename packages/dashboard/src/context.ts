import type { ReactNode } from "react";
import { createContext, createElement, useContext, useEffect, useMemo } from "react";
import { DashboardService } from "./DashboardService";
import { useApiContext } from "@phragon/render-driver-react/app";
import { __isWeb__ } from "@phragon-util/global-var";
import hotkeys from "hotkeys-js";
import { addCoreActions } from "./core";

export const DashboardContext = createContext<DashboardService | null>(null);

export function useDashboard() {
	const ctx = useContext(DashboardContext);
	if (!ctx) {
		throw new Error("Dashboard context is not defined");
	}
	return ctx;
}

export function DashboardProvider(props: { children: ReactNode }) {
	const api = useApiContext();
	if (!api.services.hotkeys) {
		if (__isWeb__()) {
			api.services.hotkeys = hotkeys;
		}
	}
	const dashboard = useMemo(() => api.services.dashboard || new DashboardService(api), []);
	if (!api.services.dashboard) {
		api.services.dashboard = dashboard;
	}
	useEffect(() => addCoreActions(dashboard), []);
	return createElement(DashboardContext.Provider, { value: dashboard, children: props.children });
}
