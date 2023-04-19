import type { Popup, PopupManagerSafeProps } from "./types";
import React from "react";
import { reaction } from "mobx";
import { PopupComponent } from "./PopupComponent";
import { ManagerContext } from "./context";

export function PopupManagerSafe(props: PopupManagerSafeProps) {
	const { store, onMount, fadeDuration = 250, zIndex = 1500 } = props;
	const [popups, setPopups] = React.useState<Popup.Item[]>([]);
	const ctx = { fadeDuration, zIndex, store };

	React.useEffect(() => (typeof onMount === "function" ? onMount(store) : undefined), [store, onMount]);
	React.useEffect(
		() =>
			reaction(
				() => store.hash,
				() => {
					setPopups(store.popup.slice());
				}
			),
		[]
	);

	return (
		<ManagerContext.Provider value={ctx}>
			{popups.map((popup) => (
				<PopupComponent key={popup.id} popup={popup} />
			))}
		</ManagerContext.Provider>
	);
}
