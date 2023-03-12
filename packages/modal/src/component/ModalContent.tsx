import type { HTMLProps } from "react";
import React from "react";

export interface ModalContentProps extends HTMLProps<HTMLDivElement> {
	isHeader: boolean;
	isFooter: boolean;
}

export function ModalContent(props: ModalContentProps) {
	const { isHeader, isFooter, style, ...rest } = props;
	return (
		<div
			{...rest}
			style={{
				paddingLeft: 20,
				paddingRight: 20,
				paddingTop: isHeader ? 15 : 20,
				paddingBottom: isFooter ? 15 : 20,
				...style,
			}}
		/>
	);
}
