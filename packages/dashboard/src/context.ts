import { createContext, useContext } from "react";
import { DashboardService } from "./DashboardService";

export const DashboardContext = createContext<DashboardService | null>(null);

export function useDashboard() {
	const ctx = useContext(DashboardContext);
	if (!ctx) {
		throw new Error("Dashboard context is not defined");
	}
	return ctx;
}
