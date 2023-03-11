import type { ElementType, HTMLProps, ReactNode } from "react";
import type { Popup } from "./types";
import type { Middleware } from "@floating-ui/react";
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

function isNode(elm: any): elm is HTMLElement {
	return !!(elm && elm.nodeType === 1 && elm.parentNode);
}

const referrerWidth: () => Middleware = () => ({
	name: "referrerWidth",
	options: {},
	fn: (state) => {
		const ref = state.elements.reference;
		const floating = state.elements.floating;
		const data: { w: number | null } = state.middlewareData.referrerWidth || { w: null };

		if (isNode(floating)) {
			const width = isNode(ref) ? ref.offsetWidth : 0;
			if (data.w === width) {
				return {};
			}
			if (width) {
				floating.style.setProperty("--popup-referrer-width", `${width}px`);
			} else {
				floating.style.removeProperty("--popup-referrer-width");
			}
			data.w = width;
			return {
				data,
				reset: {
					rects: true,
				},
			};
		}

		data.w = null;
		return { data };
	},
});

export function PopupComponent<Prop extends {} = any, State extends {} = {}>(props: {
	popup: Popup.Item<Prop, State>;
}) {
	const { store, fadeDuration, zIndex } = useManagerContext();
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
		value: state.getValue(),
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

	const refMw = React.useMemo(() => referrerWidth(), []);
	const { x, y, refs, strategy, context } = useFloating({
		open,
		onOpenChange,
		placement,
		middleware: [...middleware, refMw],
		whileElementsMounted,
	});

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

	const { style, ...bodyPropsRest } = defProps.bodyProps || {};

	return (
		<PopupContext.Provider value={ctx}>
			<FloatingFocusManager context={context}>
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
					{content}
				</div>
			</FloatingFocusManager>
		</PopupContext.Provider>
	);
}
