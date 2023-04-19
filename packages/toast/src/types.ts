import type { ToastStore } from "./ToastStore";
import type { UseOnActionClickOptions } from "@phragon-react/action-service";
import type {
	ToastActionButtonProps,
	ToastPaperProps,
	ToastButtonGroupProps,
	ToastIconProps,
	ToastTextProps,
	ToastCloseButtonProps,
	ToastAreaProps,
} from "./component";
import type { ElementType, FC, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from "react";
import { ActionNS } from "@phragon-util/action-service";

export namespace Toast {
	export type Position = "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";

	export type Id = string;

	export type Icon<Name extends string = string> = Name;

	export type Level = "info" | "error" | "default";

	export interface CommonOptions {
		/**
		 * Pause the timer when the mouse hover the toast.
		 * `Default: true`
		 */
		pauseOnHover: boolean;

		/**
		 * Pause the toast when the window loses focus.
		 * `Default: true`
		 */
		pauseOnFocusLoss: boolean;

		/**
		 * Set the delay in ms to close the toast automatically.
		 * Use `false` to prevent the toast from closing.
		 * `Default: 5000`
		 */
		autoClose: number | false;

		/**
		 * Allow toast to be draggable
		 * `Default: true`
		 */
		draggable: boolean;

		/**
		 * The percentage of the toast's width it takes for a drag to dismiss a toast
		 * `Default: 80`
		 */
		draggablePercent: number;
	}

	export interface Context {
		toast: Item;
		onClose: () => void;
		onExit: () => void;
	}

	export interface Item extends CommonOptions {
		id: Id;
		level: Level;
		text: string;
		icon: Icon | false;
		closable: boolean;
		open: boolean;
		hash: string;
		action: ButtonAction[];
	}

	export interface OpenOptions extends Partial<CommonOptions> {
		text: string;
		id?: Id;
		icon?: Icon | false;

		/**
		 * Set the toast level.
		 * `One of: 'info', 'error', 'default'`
		 */
		level?: Level;

		/**
		 * Toast can be closed.
		 */
		closable?: boolean;

		/**
		 * Called when toast is unmounted.
		 */
		onClose?(): void;

		action?: ButtonAction | ButtonAction[];
	}

	export interface ButtonAction extends UseOnActionClickOptions {
		id: string;
		name: string;
	}

	export interface StoreOptions extends Partial<CommonOptions> {}

	// actions
	export interface CloseAllActionProps {}

	export interface CloseActionProps {
		id: string;
	}

	export interface OpenActionProps extends Toast.OpenOptions {
		onCloseAction?: ActionNS.ActionType;
	}
}

type ToastComponent<P, E extends HTMLElement = HTMLDivElement> =
	| ElementType
	| ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>
	| FC<P>;

export interface ToastComponentCollection {
	ToastActionButton: ToastComponent<ToastActionButtonProps>;
	ToastPaper: ToastComponent<ToastPaperProps>;
	ToastButtonGroup: ToastComponent<ToastButtonGroupProps>;
	ToastIcon: ToastComponent<ToastIconProps>;
	ToastText: ToastComponent<ToastTextProps>;
	ToastCloseButton: ToastComponent<ToastCloseButtonProps>;
	ToastArea: ToastComponent<ToastAreaProps>;
}

export interface ToastManagerProps extends ToastComponentCollection {
	options?: Toast.StoreOptions;
	position?: Toast.Position;
}

export interface ToastManagerSafeProps extends ToastComponentCollection {
	store: ToastStore;
	position?: Toast.Position;
}
