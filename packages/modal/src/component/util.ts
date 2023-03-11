import type { CSSProperties } from "react";

export function minAreaProps(): CSSProperties {
	return {
		position: "fixed",
		left: 0,
		top: 0,
		width: "100%",
		height: "100%",
		minHeight: "100vh",
	};
}

export function minButtonProps(): CSSProperties {
	return {
		display: "inline-flex",
		justifyContent: "center",
		alignContent: "center",
		flexShrink: 0,
		textDecoration: "none",
		border: "0 none",
		outline: "0 none",
		cursor: "pointer",
	};
}
