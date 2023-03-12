import type { HTMLProps } from "react";
import React from "react";
import { minAreaProps } from "./util";

export interface ModalBackdropProps extends HTMLProps<HTMLDivElement> {
	isOpen: boolean;
}

export const ModalBackdrop = React.forwardRef<HTMLDivElement, ModalBackdropProps>(function ModalBackdrop(props, ref) {
	const { style, isOpen, ...rest } = props;
	return (
		<div
			{...rest}
			ref={ref}
			style={{
				...minAreaProps(),
				backgroundColor: "rgba(0,0,0,.85)",
				zIndex: 500,
				opacity: isOpen ? 1 : 0,
				transition: ".3s opacity",

				...style,
			}}
		/>
	);
});
