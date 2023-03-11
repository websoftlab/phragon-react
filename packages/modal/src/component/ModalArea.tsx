import type { HTMLProps } from "react";
import React from "react";
import { minAreaProps } from "./util";

export interface ModalAreaProps extends HTMLProps<HTMLDivElement> {}

export const ModalArea = React.forwardRef<HTMLDivElement, ModalAreaProps>(function ModalArea(props, ref) {
	const { style, ...rest } = props;
	return (
		<div
			{...rest}
			ref={ref}
			style={{
				...minAreaProps(),
				overflowY: "auto",
				zIndex: 510,
				display: "flex",
				justifyContent: "center",
				alignItems: "flex-start",
				flexDirection: "row",
				...style,
			}}
		/>
	);
});
