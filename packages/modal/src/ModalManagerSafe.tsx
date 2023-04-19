import type { Modal, ModalManagerSafeProps } from "./types";
import type { ComponentContextValue } from "./context";
import React from "react";
import { reaction } from "mobx";
import { lockBodyScroll } from "./lockBodyScroll";
import { Area } from "./Area";
import { Backdrop } from "./Backdrop";
import { ComponentContext } from "./context";
import { mergeCallback, subscribeEscape } from "./util";

export function ModalManagerSafe(props: ModalManagerSafeProps) {
	const {
		backdropFallbackTimeout = 1000,
		areaFallbackTimeout = 1000,
		disableBackdropClose = false,
		disableEscapeButtonClose = false,
		disableCloseButton = false,
		store,
		onMount,
		...rest
	} = props;
	const [, setHash] = React.useState("");
	const [modal, setModal] = React.useState<Modal.Item | null>(null);

	const onExitHandler = React.useCallback(() => {
		const top = store.top;
		if (top && !top.open) {
			store.destroy(top.id);
		}
	}, []);

	const onCloseHandler = React.useCallback(() => {
		let closed = false;
		let top: Modal.Item | null;
		while ((top = store.top) != null) {
			if (top.lock) {
				break;
			}
			if (store.length > 1) {
				if (top.open) {
					if (closed) {
						break;
					}
					closed = true;
				}
				store.destroy(top.id);
			} else {
				if (!closed) {
					store.close(top.id);
				}
				break;
			}
		}
	}, []);

	const isExit = store.length === 0;
	const isOpen = modal ? modal.open : false;

	React.useEffect(() => (typeof onMount === "function" ? onMount(store) : undefined), [onMount, store]);

	// prevent body scroll
	React.useEffect(() => {
		if (!isExit) {
			return lockBodyScroll();
		}
	}, [isExit]);

	React.useEffect(
		() =>
			mergeCallback(
				subscribeEscape(store, disableEscapeButtonClose),
				reaction(
					() => store.hash,
					(hash) => {
						// update ui
						setHash(hash);

						let top = store.top;
						while (store.length > 1 && top != null && !top.open) {
							store.destroy(top.id);
							top = store.top;
						}

						setModal(top);
					}
				)
			),
		[]
	);

	const ctx: ComponentContextValue = React.useMemo(
		() => ({
			store,
			disableBackdropClose,
			disableEscapeButtonClose,
			disableCloseButton,
			...rest,
		}),
		[store]
	);

	return (
		<ComponentContext.Provider value={ctx}>
			<Backdrop fallbackTimeout={backdropFallbackTimeout} isOpen={isOpen} />
			{modal && (
				<Area
					modal={modal}
					onClose={onCloseHandler}
					onExit={onExitHandler}
					fallbackTimeout={areaFallbackTimeout}
				/>
			)}
		</ComponentContext.Provider>
	);
}
