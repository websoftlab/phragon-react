import type { ToastStore } from "./ToastStore";
import type { ToastComponentCollection, Toast } from "./types";
import React, { createContext, useContext } from "react";
import { invariant } from "@phragon-util/proof";

export interface ToastManagerContextValue extends ToastComponentCollection {
	store: ToastStore;
}

export const ToastContext = React.createContext<Toast.Context | null>(null);

export const ToastManagerContext = createContext<null | ToastManagerContextValue>(null);

export function useToastManager() {
	const ctx = useContext(ToastManagerContext);
	invariant(ctx, "Manager context is not defined");
	return ctx;
}

export function useToast() {
	const ctx = useContext(ToastContext);
	invariant(ctx, "Toast context is not defined");
	return ctx;
}
