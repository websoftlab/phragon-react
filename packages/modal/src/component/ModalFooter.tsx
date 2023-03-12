import type { HTMLProps } from "react";
import React from "react";

export interface ModalFooterProps extends HTMLProps<HTMLDivElement> {}

export function ModalFooter(props: ModalFooterProps) {
	const { style, ...rest } = props;
	return (
		<div
			{...rest}
			style={{
				padding: "12px 20px 15px 20px",
				margin: 0,
				backgroundColor: "rgba(0,0,0,.05)",
				display: "flex",
				justifyContent: "flex-end",
				gap: "1em",
				...style,
			}}
		/>
	);
}
