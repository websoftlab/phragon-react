import type { HTMLProps } from "react";
import React from "react";
import { minButtonProps } from "./util";

export interface ModalCloseButtonProps extends HTMLProps<HTMLDivElement> {}

export function ModalCloseButton(props: ModalCloseButtonProps) {
	const { style, ...rest } = props;
	return (
		<span
			{...rest}
			style={{
				...minButtonProps(),
				background:
					"rgba(0,0,0,0.5) no-repeat center url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'/%3E%3Cline x1='6' y1='6' x2='18' y2='18'/%3E%3C/svg%3E\")",
				position: "absolute",
				top: 10,
				right: 10,
				width: 32,
				height: 32,
				borderRadius: 16,
				zIndex: 1,

				...style,
			}}
		/>
	);
}
