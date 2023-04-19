import type { JssTheme } from "./types";
import { createThemeColor, createGhostThemeColor } from "./createThemeColor";

const base = {
	fontSize: "16px",
	surface: {
		color: "black",
		paper: "white",
		background: "#f7faff",
	},
	zIndex: {
		navbar: 50,
		modal: 500,
		popup: 1200,
		toast: 5000,
		tooltip: 9999,
	},
	component: {},
};

export const defaultTheme: JssTheme = {
	dark: false,
	...base,
	color: {
		primary: createThemeColor("#1958a1"),
		secondary: createThemeColor("#2a9852"),
		ghost: createGhostThemeColor("#1958a1"),
		error: createThemeColor("#ca1919"),
		gray: createThemeColor("#4d545e"),
	},
};

export const defaultDarkTheme: JssTheme = {
	dark: true,
	...base,
	color: {
		primary: createThemeColor("#1958a1", true),
		secondary: createThemeColor("#2a9852", true),
		ghost: createGhostThemeColor("#1958a1", true),
		error: createThemeColor("#ca1919", true),
		gray: createThemeColor("#4d545e", true),
	},
};
