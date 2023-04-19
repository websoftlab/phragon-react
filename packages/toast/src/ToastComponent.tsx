import type { Toast } from "./types";
import React from "react";
import { useToastManager, ToastContext } from "./context";
import { Paper } from "./Paper";

export function ToastComponent(props: { toast: Toast.Item }) {
	const { store } = useToastManager();
	const { toast } = props;

	const context: Toast.Context = React.useMemo(() => {
		const { id } = toast;
		return {
			toast,
			onClose() {
				store.close(id);
			},
			onExit() {
				store.destroy(id);
			},
		};
	}, [store, toast]);

	return (
		<ToastContext.Provider value={context}>
			<Paper />
		</ToastContext.Provider>
	);
}
