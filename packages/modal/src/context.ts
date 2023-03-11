import type { ModalStore } from "./ModalStore";
import type { ModalComponentCollection } from "./types";
import { createContext, useContext } from "react";

export interface ComponentContextValue extends ModalComponentCollection {
	store: ModalStore;
}

export const ComponentContext = createContext<null | ComponentContextValue>(null);

export function useComponentContext() {
	const ctx = useContext(ComponentContext);
	if (!ctx) {
		throw new Error("Component context is not defined");
	}
	return ctx;
}
