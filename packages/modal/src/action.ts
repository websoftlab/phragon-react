import type { Modal } from "./types";
import type { ActionService } from "@phragon-util/action-service";
import type { ModalStore } from "./ModalStore";
import { emitAction } from "@phragon-util/action-service";
import { isPlainObject } from "@phragon-util/plain-object";
import { warning } from "@phragon-util/proof";
import { rand } from "./util";

function translate(service: ActionService, id: string, alternative: string) {
	if (service.hasAction("translate")) {
		return service.emit<{ id: string; alternative: string }, string>("translate", { id, alternative });
	} else {
		return alternative;
	}
}

function open(service: ActionService, store: ModalStore, props: Modal.OpenActionProps): string {
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

function openConfirm(service: ActionService, store: ModalStore, props: Modal.OpenConfirmActionProps) {
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

	const onClose = () => {
		service.emit("modal.close", { id });
	};

	action = action.map((item) => {
		const { onClick, ...rest } = item;
		return {
			...rest,
			onClick(event) {
				if (typeof onClick === "function") {
					onClick(event);
					if (event && event.defaultPrevented) {
						return;
					}
				}
				onClose();
			},
		};
	});

	if (closeButton !== false) {
		if (!closeButton) {
			closeButton =
				action.length > 0
					? translate(service, "button.cancel", "Cancel")
					: translate(service, "button.ok", "Ok");
		}
		action.unshift({
			id: "close",
			variant: "ghost",
			onClick: onClose,
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

export function addModalActions(service: ActionService, store: ModalStore) {
	return service.addActions({
		modal: (props: Modal.OpenActionProps) => open(service, store, props),
		"modal.confirm": (props: Modal.OpenConfirmActionProps) => openConfirm(service, store, props),
		"modal.close": (props: Modal.CloseActionProps = {}) => close(store, props),
		"modal.closeAll": () => closeAll(store),
	});
}
