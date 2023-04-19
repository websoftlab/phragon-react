import type { UseCreateActionServiceOptions } from "./useCreateActionService";
import { ActionServiceContext } from "./context";
import { useCreateActionService } from "./useCreateActionService";
import React from "react";

export interface ActionServiceProviderProps extends UseCreateActionServiceOptions {
	children?: React.ReactNode;
}

export function ActionServiceProvider(props: ActionServiceProviderProps) {
	const { children, ...rest } = props;
	const ctx = useCreateActionService(rest);
	return <ActionServiceContext.Provider value={ctx}>{children}</ActionServiceContext.Provider>;
}
