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
				...style,
			}}
		/>
	);
}
