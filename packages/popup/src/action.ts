import type { Popup } from "./types";
import type { ActionService } from "@phragon-util/action-service";
import type { PopupStore } from "./PopupStore";
import { isPlainObject } from "@phragon-util/plain-object";
import { warning } from "@phragon-util/proof";
import { emitAction } from "@phragon-util/action-service";

function open(service: ActionService, store: PopupStore, props: Popup.OpenActionProps): string {
	if (!isPlainObject(props) || !props.component) {
		warning(false, "Invalid open popup arguments (props)");
		return "";
	}
	const { onCloseAction, onClose, ...rest } = props;
	return store.open({
		...rest,
		onClose() {
			if (typeof onClose === "function") {
				onClose();
			}
			if (onCloseAction) {
				emitAction(service, onCloseAction);
			}
		},
	});
}

function toggle(
	service: ActionService,
	store: PopupStore,
	props: Popup.OpenActionProps
): { id: string; open: boolean } {
	if (!isPlainObject(props)) {
		warning(false, "Invalid open toast arguments (props)");
		return { id: "", open: false };
	}
	let { component, id } = props;
	if (id == null) {
		id = component;
	}
	if (store.isOpen(id)) {
		store.close(id);
		return { id, open: false };
	} else {
		return { id: open(service, store, props), open: true };
	}
}

function close(store: PopupStore, props: Popup.CloseActionProps) {
	store.close(props.id);
}

function closeAll(store: PopupStore) {
	store.closeAll();
}

export function addPopupActions(service: ActionService, store: PopupStore) {
	return service.addActions({
		popup: (props: Popup.OpenActionProps) => open(service, store, props),
		"popup.toggle": (props: Popup.OpenActionProps) => toggle(service, store, props),
		"popup.close": (props: Popup.CloseActionProps) => close(store, props),
		"popup.closeAll": () => closeAll(store),
	});
}
