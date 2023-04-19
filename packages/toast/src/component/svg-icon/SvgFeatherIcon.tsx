import React from "react";
import type { ReactNode } from "react";

export function SvgFeatherIcon(props: { children: ReactNode }) {
	return (
		<svg
			viewBox="0 0 24 24"
			width="24"
			height="24"
			stroke="currentColor"
			strokeWidth="2"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			{props.children}
		</svg>
	);
}
