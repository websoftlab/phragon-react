import type { Dashboard } from "@phragon/plugin-dashboard";
import type { ModalStore } from "./ModalStore";
import type { ElementType, MouseEventHandler } from "react";
import type {
	ModalActionButtonProps,
	ModalAreaProps,
	ModalBackdropProps,
	ModalCloseButtonProps,
	ModalContainerProps,
	ModalContentProps,
	ModalFooterProps,
	ModalHeaderProps,
	ModalPaperProps,
} from "./component";
import type { MobxStateValue } from "@phragon-react/mobx-state-value";

export interface ModalComponentCollection {
	ModalHeader: ElementType<ModalHeaderProps>;
	ModalFooter: ElementType<ModalFooterProps>;
	ModalArea: ElementType<ModalAreaProps>;
	ModalBackdrop: ElementType<ModalBackdropProps>;
	ModalContainer: ElementType<ModalContainerProps>;
	ModalPaper: ElementType<ModalPaperProps>;
	ModalContent: ElementType<ModalContentProps>;
	ModalActionButton: ElementType<ModalActionButtonProps>;
	ModalCloseButton: ElementType<ModalCloseButtonProps>;
}

interface ModalManagerFallbackTimeout {
	backdropFallbackTimeout?: number;
	areaFallbackTimeout?: number;
}

export interface ModalManagerSafeProps extends ModalComponentCollection, ModalManagerFallbackTimeout {
	store: ModalStore;
}

export interface ModalManagerProps extends ModalComponentCollection, ModalManagerFallbackTimeout {
	options?: Modal.StoreOptions;
	loadableComponentPrefix?: string;
}

export namespace Modal {
	export interface Interceptor<Prop> {
		has(name: string): boolean;
		get(name: string): ElementType<Prop>;
	}

	export interface ButtonAction extends Dashboard.ButtonAction {
		onClick?: MouseEventHandler;
	}

	export type Size = "full" | "large" | "normal" | "medium" | "small";

	export interface Item<Prop extends {} = {}, Value extends {} = {}> {
		id: string;
		size: Size;
		title?: string;
		index: number;
		lock: boolean;
		open: boolean;
		component: string;
		state: MobxStateValue<Value>;
		props: Prop;
		closable: boolean;
		action: ButtonAction[];
	}

	export interface Context<Prop extends {} = {}, Value extends {} = {}>
		extends Pick<Item<Prop, Value>, "id" | "size" | "props" | "closable"> {
		store: ModalStore;
		value: Value;
		onClose(): void;
	}

	export interface StoreOptions {
		size?: Size;
	}

	export interface OpenOptions<Prop extends {} = {}, Value extends {} = {}> {
		id?: string;
		size?: Size;
		title?: string;
		component: string;
		props: Prop;
		value?: Value;
		closable?: boolean;
		action?: ButtonAction | ButtonAction[];
		onClose?: () => void;
	}

	export interface OpenActionProps extends OpenOptions {
		onCloseAction?: Dashboard.Action;
	}

	export interface OpenConfirmActionProps {
		id?: string;
		text: string;
		title?: string;
		closeButton?: string | false;
		action?: ButtonAction | ButtonAction[];
	}

	export interface CloseActionProps {
		id?: string;
	}
}
