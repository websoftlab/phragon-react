import type { ElementType } from "react";
import type { Placement, Middleware, ReferenceType } from "@floating-ui/react";
import type { PopupStore } from "./PopupStore";
import type { MobxStateValue } from "@phragon-util/mobx-state-value";
import type { ActionNS } from "@phragon-util/action-service";

export interface PopupManagerProps {
	fadeDuration?: number;
	zIndex?: number;
}

export interface PopupManagerSafeProps extends PopupManagerProps {
	store: PopupStore;
	onMount?: (store: PopupStore) => void | (() => void);
}

export namespace Popup {
	export interface Interceptor<Prop> {
		has(name: string): boolean;
		get(name: string): ElementType<Prop>;
	}

	export interface ItemOptions<RT extends ReferenceType = ReferenceType> {
		middleware?: Array<Middleware | null | undefined | false>;
		whileElementsMounted?: (reference: RT, floating: HTMLElement, update: () => void) => void | (() => void);
		placement?: Placement;
	}

	export interface Item<Prop extends {} = any, State extends {} = {}> {
		id: string;
		ref: HTMLElement | null;
		open: boolean;
		focusable: boolean;
		component: string;
		props: Prop;
		options: ItemOptions | (() => ItemOptions);
		state: MobxStateValue<State>;
		index: number;
	}

	export interface Context<Prop extends {} = any, State extends {} = {}> extends Item<Prop, State> {
		store: PopupStore;
		onClose: () => void;
	}

	export interface OpenOptions<Prop extends {} = any, State extends {} = {}>
		extends Omit<Item<Prop>, "id" | "index" | "open" | "options" | "state" | "focusable"> {
		id?: string;
		options?: ItemOptions | (() => ItemOptions);
		value?: State;
		onClose?: () => void;
		focusable?: boolean;
	}

	export interface OpenActionProps<Prop extends {} = any, State extends {} = {}> extends OpenOptions<Prop, State> {
		onCloseAction?: ActionNS.ActionType;
	}

	export interface CloseActionProps {
		id: string;
	}
}
