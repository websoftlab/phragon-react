import type { HTMLProps } from "react";
import React from "react";

export interface ModalHeaderProps extends HTMLProps<HTMLHeadingElement> {}

export function ModalHeader(props: ModalHeaderProps) {
	const { style, ...rest } = props;
	return (
		<h3
			{...rest}
			style={{
				padding: "15px 20px 10px 20px",
				margin: 0,
				borderBottom: "1px solid rgba(0,0,0,.2)",
				...style,
			}}
		/>
	);
}
