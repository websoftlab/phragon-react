import type { Modal } from "./types";
import type { DashboardService } from "@phragon-react/dashboard";
import type { ModalStore } from "./ModalStore";
import { isPlainObject } from "@phragon-util/plain-object";
import { warning } from "@phragon-util/proof";
import { rand } from "./util";
import { emitAction } from "@phragon-react/dashboard";

function translate(service: DashboardService, id: string, alternative: string) {
	return service.emit<{ id: string; alternative: string }, string>("translate", { id, alternative });
}

function open(service: DashboardService, store: ModalStore, props: Modal.OpenActionProps): string {
	if (!isPlainObject(props) || !props.component) {
		warning(false, "Invalid open modal arguments (props)");
		return "";
	}
	const { onClose, onCloseAction, ...rest } = props;
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

function openConfirm(service: DashboardService, store: ModalStore, props: Modal.OpenConfirmActionProps) {
	let { title, text, id, action, closeButton } = props;
	if (title == null) {
		title = translate(service, "modal.confirm.title", location.hostname);
	}
	if (!id) {
		id = rand("confirm-");
	}
	if (!Array.isArray(action)) {
		action = action ? [action] : [];
	} else {
		action = action.slice();
	}

	if (closeButton !== false) {
		if (!closeButton) {
			closeButton =
				action.length > 0
					? translate(service, "button.cancel", "Cancel")
					: translate(service, "button.ok", "Ok");
		}
		action.unshift({
			id: "close",
			action: "modal.close",
			name: closeButton,
		});
	}

	return open(service, store, {
		id,
		title,
		action,
		closable: false,
		size: "medium",
		component: "text",
		props: {
			text,
		},
	});
}

function close(store: ModalStore, props: Modal.CloseActionProps) {
	store.close(props?.id);
}

function closeAll(store: ModalStore) {
	store.closeAll();
}

export function addModalActions(service: DashboardService, store: ModalStore) {
	return service.addActions({
		modal: (props: Modal.OpenActionProps) => open(service, store, props),
		"modal.confirm": (props: Modal.OpenConfirmActionProps) => openConfirm(service, store, props),
		"modal.close": (props: Modal.CloseActionProps = {}) => close(store, props),
		"modal.closeAll": () => closeAll(store),
	});
}
