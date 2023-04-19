import type { DashboardService } from "./DashboardService";
import { useDashboard } from "./context";
import { useEffect, useState } from "react";
import { reaction } from "mobx";

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
