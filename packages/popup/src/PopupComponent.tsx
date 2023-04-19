import type { ElementType, HTMLProps, ReactNode } from "react";
import type { Popup } from "./types";
import type { Middleware, UseFloatingProps } from "@floating-ui/react";
import React from "react";
import {
	useFloating,
	autoUpdate,
	useDismiss,
	useRole,
	useClick,
	useInteractions,
	FloatingFocusManager,
	useId,
	useTransitionStyles,
} from "@floating-ui/react";
import { useManagerContext } from "./context";
import { invariant } from "@phragon-util/proof";

const PopupContext = React.createContext<Popup.Context | null>(null);

export function usePopup<Prop extends {} = any, Value extends {} = {}>() {
	return React.useContext(PopupContext) as Popup.Context<Prop, Value> | null;
}

const interceptors: Popup.Interceptor<any>[] = [];
const components: Record<string, ElementType> = {};
const componentProps: Record<string, PopupComponentTypeProps> = {};

export interface PopupComponentTypeProps<Prop = any> {
	props?: Prop;
	bodyProps?: HTMLProps<HTMLDivElement>;
	options?: Popup.ItemOptions;
	onPropsHash?: (props: Prop) => string;
	singleton?: boolean;
	focusable?: boolean;
}

export function addPopupInterception<Prop = any>(interceptor: Popup.Interceptor<Prop>) {
	if (!interceptors.includes(interceptor)) {
		interceptors.push(interceptor);
	}
	return () => {
		const index = interceptors.indexOf(interceptor);
		if (index !== -1) {
			interceptors.splice(index, 1);
		}
	};
}

export function hasPopupComponent(name: string) {
	return components.hasOwnProperty(name) || interceptors.some((it) => it.has(name));
}

export function setPopupComponent(name: string, element: ElementType, props?: PopupComponentTypeProps) {
	components[name] = element;
	componentProps[name] = props || {};
}

export function setDefaultPopupComponentProps(name: string, props: PopupComponentTypeProps) {
	componentProps[name] = props;
}

export function getDefaultPopupComponentProps(name: string) {
	return componentProps.hasOwnProperty(name) ? componentProps[name] : {};
}

export function getPopupComponent(name: string) {
	if (components.hasOwnProperty(name)) {
		return components[name];
	}
	for (const it of interceptors) {
		if (it.has(name)) {
			return it.get(name);
		}
	}
	return () => null;
}

const saveLostPosition: () => Middleware = () => {
	const data = { x: 0, y: 0 };
	return {
		name: "saveLostPosition",
		options: {},
		fn: (state) => {
			const ref = state.elements.reference;
			const found = ref && document.body.contains(ref as HTMLElement);

			if (found) {
				data.x = state.x;
				data.y = state.y;
				return { data };
			}

			const xy = state.middlewareData.saveLostPosition || data;
			return {
				data: xy,
				...xy,
			};
		},
	};
};

function FloatingPopup(props: {
	children: ReactNode;
	useFloatingProps: Partial<UseFloatingProps>;
	bodyProps?: HTMLProps<HTMLDivElement>;
}) {
	const ctx = usePopup();
	invariant(ctx, "Popup context is not defined");

	const { store, fadeDuration, zIndex } = useManagerContext();
	const { children, useFloatingProps, bodyProps = {} } = props;
	const { x, y, refs, strategy, context } = useFloating(useFloatingProps);
	const { id, ref, index, open, focusable } = ctx;

	const headingId = useId();
	const click = useClick(context);
	const dismiss = useDismiss(context, {
		outsidePress(event) {
			const target = event.target as Element;
			return !target.closest("[aria-haspopup=dialog]");
		},
	});
	const role = useRole(context);
	const { isMounted, styles: transitionStyles } = useTransitionStyles(context, { duration: fadeDuration });
	const { getFloatingProps } = useInteractions([click, dismiss, role]);
	const isDie = !open && !isMounted;

	React.useEffect(() => {
		if (isMounted) {
			refs.setReference(ref);
		}
	}, [isMounted, ref]);

	React.useEffect(() => {
		if (isDie) {
			store.destroy(id);
		}
	}, [store, id, isDie]);

	if (!isMounted) {
		return null;
	}

	const { style, ...bodyPropsRest } = bodyProps;

	return (
		<PopupContext.Provider value={ctx}>
			<FloatingFocusManager context={context} initialFocus={focusable ? 0 : -1}>
				<div
					{...bodyPropsRest}
					aria-labelledby={headingId}
					ref={refs.setFloating}
					style={{
						...style,
						...transitionStyles,
						outline: "0 none",
						zIndex: zIndex + index,
						position: strategy,
						top: y ?? 0,
						left: x ?? 0,
					}}
					{...getFloatingProps()}
				>
					{children}
				</div>
			</FloatingFocusManager>
		</PopupContext.Provider>
	);
}

export function PopupComponent<Prop extends {} = any, State extends {} = {}>(props: {
	popup: Popup.Item<Prop, State>;
}) {
	const { store } = useManagerContext();
	const { popup } = props;
	const { id, index, open, ref, state, component, ...popupRest } = popup;

	const defProps = getDefaultPopupComponentProps(component);
	const onClose = React.useCallback(() => {
		store.close(id);
	}, [store, id]);
	const onOpenChange = React.useCallback(
		(value: boolean) => {
			if (value) {
				store.reOpen(id);
			} else {
				store.close(id);
			}
		},
		[store, id]
	);

	const ctx: Popup.Context = {
		...popupRest,
		state,
		id,
		index,
		open,
		ref,
		component,
		store,
		onClose,
	};

	let opt = ctx.options;
	if (typeof opt === "function") {
		opt = opt();
	}

	let { middleware, placement, whileElementsMounted } = opt;
	if (!middleware) {
		middleware = defProps.options?.middleware || [];
	}
	if (!whileElementsMounted) {
		whileElementsMounted = defProps.options?.whileElementsMounted || autoUpdate;
	}
	if (!placement) {
		placement = defProps.options?.placement;
	}

	const refMw = React.useMemo(() => [saveLostPosition()], [id]);
	const floatingProps: Partial<UseFloatingProps> = {
		open,
		onOpenChange,
		placement,
		middleware: [...middleware, ...refMw],
		whileElementsMounted,
	};

	let content: ReactNode;
	if (hasPopupComponent(component)) {
		const As = getPopupComponent(component);
		content = <As {...defProps.props} {...popup.props} />;
	} else {
		content = (
			<div
				style={{
					backgroundColor: "#900",
					borderRadius: 10,
					color: "white",
					padding: 10,
				}}
			>{`The "${component}" popup component not found`}</div>
		);
	}

	return (
		<PopupContext.Provider value={ctx}>
			<FloatingPopup useFloatingProps={floatingProps} bodyProps={defProps.bodyProps}>
				{content}
			</FloatingPopup>
		</PopupContext.Provider>
	);
}
