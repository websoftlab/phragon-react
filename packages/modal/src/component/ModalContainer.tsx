import type { CSSProperties, HTMLProps } from "react";
import type { Modal } from "../types";
import React from "react";

const containerSize: Record<Modal.Size, string | number> = {
	full: "100%",
	large: 780,
	normal: 580,
	medium: 400,
	small: 320,
};

export interface ModalContainerProps extends HTMLProps<HTMLDivElement> {
	isOpen: boolean;
	disableScale: boolean;
	modalSize: Modal.Size;
}

export const ModalContainer = React.forwardRef<HTMLDivElement, ModalContainerProps>(function ModalContainer(
	props,
	ref
) {
	const { style, isOpen, modalSize, disableScale, ...rest } = props;
	const containerStyle: CSSProperties = {
		position: "relative",
		width: "100%",
		zIndex: isOpen ? 10 : 5,
		transform: disableScale ? undefined : isOpen ? "scale(1)" : "scale(0.75, 0.5)",
		opacity: isOpen ? 1 : 0,
		visibility: isOpen ? "visible" : "hidden",
		transition: disableScale ? ".3s opacity, .3s visibility" : ".3s opacity, .3s visibility, .3s transform",
	};
	if (modalSize !== "full" && containerSize[modalSize]) {
		containerStyle.marginTop = 20;
		containerStyle.padding = "0 20px 30px 10px";
		containerStyle.maxWidth = containerSize[modalSize];
	}
	return (
		<div
			{...rest}
			ref={ref}
			style={{
				...containerStyle,
				...style,
			}}
		/>
	);
});
