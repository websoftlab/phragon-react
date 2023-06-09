import type { ActionNS } from "@phragon-util/action-service";
import type { UseOnActionClickOptions } from "@phragon-react/action-service";
import type { ModalStore } from "./ModalStore";
import type { ElementType, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, FC } from "react";
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
import type { MobxStateValue } from "@phragon-util/mobx-state-value";

type ModalComponent<P, E extends HTMLElement = HTMLDivElement> =
	| ElementType
	| ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>
	| FC<P>;

export interface ModalComponentCollection {
	ModalHeader: ModalComponent<ModalHeaderProps>;
	ModalFooter: ModalComponent<ModalFooterProps>;
	ModalArea: ModalComponent<ModalAreaProps>;
	ModalBackdrop: ModalComponent<ModalBackdropProps>;
	ModalContainer: ModalComponent<ModalContainerProps>;
	ModalPaper: ModalComponent<ModalPaperProps>;
	ModalContent: ModalComponent<ModalContentProps>;
	ModalActionButton: ModalComponent<ModalActionButtonProps>;
	ModalCloseButton: ModalComponent<ModalCloseButtonProps>;
}

export interface ModalManagerDisableCloseOptions {
	disableEscapeButtonClose?: boolean;
	disableBackdropClose?: boolean;
	disableCloseButton?: boolean;
}

interface ModalManagerFallbackTimeout {
	backdropFallbackTimeout?: number;
	areaFallbackTimeout?: number;
}

export interface ModalManagerSafeProps
	extends ModalComponentCollection,
		ModalManagerFallbackTimeout,
		ModalManagerDisableCloseOptions {
	store: ModalStore;
	onMount?: (store: ModalStore) => void | (() => void);
}

export interface ModalManagerProps
	extends ModalComponentCollection,
		ModalManagerFallbackTimeout,
		ModalManagerDisableCloseOptions {
	options?: Modal.StoreOptions;
	onMount?: (store: ModalStore) => void | (() => void);
}

export namespace Modal {
	export interface Interceptor<Prop> {
		has(name: string): boolean;
		get(name: string): ElementType<Prop>;
	}

	export interface ButtonAction extends UseOnActionClickOptions {
		id: string;
		name: string;
		icon?: string;
		variant?: string;
		disabled?: boolean;
	}

	export type Size<SizeName extends string = string> = "full" | "large" | "normal" | "medium" | "small" | SizeName;

	export interface Item<Prop extends {} = {}, Value extends {} = {}>
		extends Required<ModalManagerDisableCloseOptions> {
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
		extends Pick<Item<Prop, Value>, "id" | "size" | "lock" | "props" | "closable"> {
		title: string | null;
		store: ModalStore;
		value: Value;
		onClose(): void;
	}

	export interface StoreOptions {
		size?: Size;
	}

	export interface OpenOptions<Prop extends {} = {}, Value extends {} = {}> extends ModalManagerDisableCloseOptions {
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
		onCloseAction?: ActionNS.ActionType;
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
