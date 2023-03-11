import type { PopupStore } from "./PopupStore";
import { createContext, useContext } from "react";

export interface ManagerContextValue {
	store: PopupStore;
	fadeDuration: number;
	zIndex: number;
}

export const ManagerContext = createContext<null | ManagerContextValue>(null);

export function useManagerContext() {
	const ctx = useContext(ManagerContext);
	if (!ctx) {
		throw new Error("Manager context is not defined");
	}
	return ctx;
}
