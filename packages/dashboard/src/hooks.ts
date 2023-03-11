import type { Dashboard } from "@phragon/plugin-dashboard";
import type { DashboardService } from "./DashboardService";
import type { MouseEvent } from "react";
import { useDashboard } from "./context";
import { useCallback, useEffect, useState } from "react";
import { reaction } from "mobx";
import { emitAction } from "./util";

export function useDashboardActionCallback(
	action?: Dashboard.Action,
	prevented: boolean = false
): (e?: MouseEvent) => void {
	const service = useDashboard();
	return useCallback(
		(e?: MouseEvent) => {
			if (!action) {
				return;
			}
			if (e && prevented) {
				e.preventDefault();
			}
			if (service) {
				emitAction(service, action);
			}
		},
		[action, prevented]
	);
}

function getActive(service: DashboardService, name: string) {
	return service.getActive(name);
}

function getBadge(service: DashboardService, name: string) {
	return service ? (service.hasBadge(name) ? service.getBadge(name) : null) : null;
}

export function useActive(name: string): boolean | null {
	const service = useDashboard();
	const [active, setActive] = useState(() => getActive(service, name));
	useEffect(() => reaction(() => getActive(service, name), setActive), [service, name]);
	return active;
}

export function useBadge(name: string) {
	const service = useDashboard();
	const [badge, setBadge] = useState(() => getBadge(service, name));
	useEffect(() => reaction(() => getBadge(service, name), setBadge), [service, name]);
	return badge;
}
