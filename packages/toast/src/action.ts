import type { Toast } from "./types";
import type { ActionService } from "@phragon-util/action-service";
import type { ToastStore } from "./ToastStore";
import { isPlainObject } from "@phragon-util/plain-object";
import { warning } from "@phragon-util/proof";
import { emitAction } from "@phragon-util/action-service";

function open(service: ActionService, store: ToastStore, props: Toast.OpenActionProps): string {
	if (!isPlainObject(props) || !props.text) {
		warning(false, "Invalid open toast arguments (props)");
		return "";
	}

	let { level = "default", icon, onClose, onCloseAction, ...rest } = props;
	if (icon == null) {
		switch (level) {
			case "default":
				icon = "message";
				break;
			case "error":
				icon = "alert";
				break;
			case "info":
				icon = "bell";
				break;
		}
	}

	return store.open({
		...rest,
		level,
		icon,
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

function close(store: ToastStore, props: Toast.CloseActionProps) {
	store.close(props.id);
}

function closeAll(store: ToastStore, _props: Toast.CloseAllActionProps) {
	store.closeAll();
}

export function addToastActions(service: ActionService, store: ToastStore) {
	return service.addActions({
		toast: (props: Toast.OpenActionProps) => open(service, store, props),
		"toast.close": (props: Toast.CloseActionProps) => close(store, props),
		"toast.closeAll": (props: Toast.CloseAllActionProps) => closeAll(store, props),
	});
}
