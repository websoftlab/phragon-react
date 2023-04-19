import type { ToastManagerSafeProps } from "./types";
import React from "react";
import { ToastManagerContext } from "./context";
import { ToastComponent } from "./ToastComponent";
import { reaction } from "mobx";

export function ToastManagerSafe(props: ToastManagerSafeProps) {
	const { position, ...ctx } = props;
	const { store, ToastArea } = ctx;
	const [, setHash] = React.useState(store.hash);

	React.useEffect(() => reaction(() => store.hash, setHash), [store]);
	if (!store.length) {
		return null;
	}

	return (
		<ToastManagerContext.Provider value={ctx}>
			<ToastArea position={position}>
				{store.toastList.map((item) => (
					<ToastComponent key={item.id} toast={item} />
				))}
			</ToastArea>
		</ToastManagerContext.Provider>
	);
}
