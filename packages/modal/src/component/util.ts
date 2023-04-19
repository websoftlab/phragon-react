import type { JssStyle } from "jss";

export const minArea: JssStyle = {
	position: "fixed",
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
	minHeight: "-webkit-fill-available",
	fallbacks: {
		minHeight: "100vh",
	},
};

export const minButton: JssStyle = {
	display: "inline-flex",
	justifyContent: "center",
	alignItems: "center",
	flexShrink: 0,
	textDecoration: "none",
	border: "0 none",
	outline: "0 none",
	cursor: "pointer",
};
