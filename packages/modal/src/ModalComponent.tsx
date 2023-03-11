import type { ElementType, ReactNode, HTMLProps } from "react";
import type { Modal } from "./types";
import type { ModalPaperProps } from "./component";
import React from "react";
import { useComponentContext } from "./context";
import { Text } from "./Text";

const ModalContext = React.createContext<Modal.Context | null>(null);

export function useModal() {
	return React.useContext(ModalContext);
}

const interceptors: Modal.Interceptor<any>[] = [];
const components: Record<string, ElementType> = { text: Text };
const componentProps: Record<string, ModalComponentTypeProps> = { text: {} };

export interface ModalComponentTypeProps<Prop extends {} = any> {
	closable?: boolean;
	disableScale?: boolean;
	size?: Modal.Size;
	title?: string;
	props?: any;
	paperProps?: HTMLProps<HTMLDivElement>;
	onPropsHash?: (props: Prop) => string;
}

export function addModalInterception<Prop = any>(interceptor: Modal.Interceptor<Prop>) {
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

export function hasModalComponent(name: string) {
	return components.hasOwnProperty(name) || interceptors.some((it) => it.has(name));
}

export function setModalComponent(name: string, element: ElementType, props?: ModalComponentTypeProps) {
	components[name] = element;
	componentProps[name] = props || {};
}

export function setDefaultModalComponentProps(name: string, props: ModalComponentTypeProps) {
	componentProps[name] = props;
}

export function getDefaultModalComponentProps(name: string) {
	return componentProps.hasOwnProperty(name) ? componentProps[name] : {};
}

export function getModalComponent(name: string) {
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

export function ModalComponent(props: { modal: Modal.Item; onClose: () => void }) {
	const { store, ModalActionButton, ModalPaper, ModalContent, ModalFooter, ModalHeader, ModalCloseButton } =
		useComponentContext();
	const { modal, onClose } = props;
	const { component, state, title, action } = modal;
	const closable = modal.closable && !modal.lock;
	const isHeader = title != null && title !== "";
	const isFooter = action.length > 0;
	const context: Modal.Context = {
		store,
		value: state.getValue(),
		id: modal.id,
		size: modal.size,
		onClose,
		props: modal.props,
		closable,
	};

	let content: ReactNode;
	let paperProps: ModalPaperProps = {
		isFull: modal.size === "full",
	};

	if (hasModalComponent(component)) {
		const Component = getModalComponent(component);
		paperProps = {
			...getDefaultModalComponentProps(component).paperProps,
			...paperProps,
		};
		content = (
			<ModalContent isHeader={isHeader} isFooter={isFooter}>
				<Component {...modal.props} />
			</ModalContent>
		);
	} else {
		content = (
			<div
				style={{
					backgroundColor: "#900",
					borderRadius: 10,
					color: "white",
					padding: 10,
				}}
			>{`The "${component}" modal component not found`}</div>
		);
	}

	return (
		<ModalContext.Provider value={context}>
			<ModalPaper {...paperProps}>
				{isHeader && <ModalHeader>{title}</ModalHeader>}
				{closable && <ModalCloseButton onClick={onClose} />}
				{content}
				{isFooter && (
					<ModalFooter>
						{action.map((item, index) => {
							const { id, name, disabled, ...rest } = item;
							return (
								<ModalActionButton
									key={id || `index-${index}`}
									disabled={disabled || modal.lock}
									{...rest}
								>
									{name}
								</ModalActionButton>
							);
						})}
					</ModalFooter>
				)}
			</ModalPaper>
		</ModalContext.Provider>
	);
}
