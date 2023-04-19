export { DashboardContext, useDashboard } from "./context";
export { DashboardProvider } from "./DashboardProvider";
export { DashboardService } from "./DashboardService";
export { useActive, useBadge } from "./hooks";
export { DashboardModalManager, DashboardPopupManager } from "./manager";

export type { DashboardModalManagerProps, DashboardPopupManagerProps } from "./manager";
export type {
	StateRebootActionProps,
	StateActionProps,
	StateReloadActionProps,
	StateUpdateActionProps,
} from "./action";
