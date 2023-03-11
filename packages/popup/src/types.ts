import type { ElementType } from "react";
import type { Placement, Middleware, ReferenceType } from "@floating-ui/react";
import type { PopupStore } from "./PopupStore";
import type { MobxStateValue } from "@phragon-react/mobx-state-value";
import type { Dashboard } from "@phragon/plugin-dashboard";

interface PopupManagerBaseProps {
	fadeDuration?: number;
	zIndex?: number;
}

export interface PopupManagerProps extends PopupManagerBaseProps {
	loadableComponentPrefix?: string;
}

export interface PopupManagerSafeProps extends PopupManagerBaseProps {
	store: PopupStore;
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
		component: string;
		props: Prop;
		options: ItemOptions | (() => ItemOptions);
		state: MobxStateValue<State>;
		index: number;
	}

	export interface Context<Prop extends {} = any, State extends {} = {}> extends Omit<Item<Prop, State>, "state"> {
		store: any;
		value: State;
		onClose: () => void;
	}

	export interface OpenOptions<Prop extends {} = any, State extends {} = {}>
		extends Omit<Item<Prop>, "id" | "index" | "open" | "options" | "state"> {
		id?: string;
		options?: ItemOptions | (() => ItemOptions);
		value?: State;
		onClose?: () => void;
	}

	export interface OpenActionProps<Prop extends {} = any, State extends {} = {}> extends OpenOptions<Prop, State> {
		onCloseAction?: Dashboard.Action;
	}

	export interface CloseActionProps {
		id: string;
	}
}
