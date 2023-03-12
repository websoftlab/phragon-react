import type { HTMLProps } from "react";
import React from "react";

export interface ModalPaperProps extends HTMLProps<HTMLDivElement> {
	isFull: boolean;
}

export function ModalPaper(props: ModalPaperProps) {
	const { style, isFull, ...rest } = props;
	return (
		<div
			{...rest}
			style={{
				backgroundColor: "white",
				color: "black",
				borderRadius: isFull ? 0 : 10,
				minHeight: 50,
				position: "relative",
				boxShadow: "0 4px 20px -4px rgba(0,0,0,.1)",
				minWidth: 240,
				...style,
			}}
		/>
	);
}
