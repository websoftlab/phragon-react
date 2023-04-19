import type { JssStyle } from "jss";
import type { JssTheme } from "@phragon-react/jss";

export const minButton: (theme: JssTheme) => JssStyle = (theme: JssTheme): JssStyle => {
	return {
		display: "inline-flex",
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		textDecoration: "none",
		border: "0 none",
		outline: "0 none",
		cursor: "pointer",
		transition: ".3s background-color",
		color: "rgba(0,0,0,.8)",
		backgroundColor: theme.dark ? "rgba(255,255,255,.2)" : "rgba(0,0,0,.1)",
		"&:hover": {
			backgroundColor: theme.dark ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.15)",
		},
	};
};

export const minSvgIcon: JssStyle = {
	fontSize: "32px",
	width: "1em",
	height: "1em",
	margin: "2px 0",
	"& > svg": {
		width: ".75em",
		height: ".75em",
	},
	"@media screen and (max-width: 480px)": {
		fontSize: "26px",
	},
};
