import type { HTMLProps } from "react";
import React from "react";

export interface ModalHeaderProps extends HTMLProps<HTMLHeadingElement> {}

export function ModalHeader(props: ModalHeaderProps) {
	const { style, ...rest } = props;
	return (
		<h3
			{...rest}
			style={{
				padding: "15px 20px 12px 20px",
				margin: 0,
				borderBottom: "1px solid rgba(0,0,0,.05)",
				fontWeight: "bolder",
				fontSize: "1.25em",
				lineHeight: "1.2",
				...style,
			}}
		/>
	);
}
