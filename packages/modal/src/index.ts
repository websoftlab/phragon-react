export { ModalStore } from "./ModalStore";
export { ModalManagerSafe } from "./ModalManagerSafe";
export { ModalManager } from "./ModalManager";
export { addModalActions } from "./action";
export {
	hasModalComponent,
	setModalComponent,
	getModalComponent,
	getDefaultModalComponentProps,
	setDefaultModalComponentProps,
	useModal,
	addModalInterception,
} from "./ModalComponent";

export type { Modal, ModalComponentCollection, ModalManagerProps, ModalManagerSafeProps } from "./types";
export type { ModalComponentTypeProps } from "./ModalComponent";
export type {
	ModalBackdropProps,
	ModalAreaProps,
	ModalPaperProps,
	ModalCloseButtonProps,
	ModalActionButtonProps,
	ModalContainerProps,
	ModalContentProps,
	ModalFooterProps,
	ModalHeaderProps,
} from "./component";
