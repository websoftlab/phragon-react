import type { Colorable } from "./util";
import type { JssTheme, JssThemeColorName } from "./types";
import { clonePlainObject } from "@phragon-util/plain-object";
import { createGhostThemeColor, createThemeColor } from "./createThemeColor";
import { isColorObject, isObject, hsvColor } from "./util";
import { defaultDarkTheme, defaultTheme } from "./constant";

const themeCache = Symbol();
const themeCacheDark = Symbol();
const isTheme = Symbol();

export function createTheme<T extends {} = {}>(theme: unknown): JssTheme<T> {
	if (!isObject<any>(theme)) {
		return clonePlainObject(defaultTheme) as JssTheme<T>;
	}

	if (theme[isTheme]) {
		return theme;
	}

	let dark = false;
	if (theme.colorMode) {
		dark = theme.colorMode === "dark" || theme.colorMode === "darken";
	} else if (typeof theme.darken === "boolean") {
		dark = theme.darken;
	} else if (typeof theme.dark === "boolean") {
		dark = theme.dark;
	}

	const cached = dark ? theme[themeCacheDark] : theme[themeCache];
	if (cached) {
		return cached;
	}

	const copy = clonePlainObject(dark ? defaultDarkTheme : defaultTheme);
	copy.dark = dark;

	let size: string | number | null = null;
	if (theme.fontSize) {
		size = theme.fontSize;
	} else if (isObject<{ font: { size?: string | number } }>(theme.font) && theme.font.size) {
		size = theme.font.size;
	}

	if (size) {
		if (typeof size === "number") copy.fontSize = `${size}px`;
		else copy.fontSize = String(size);
	}

	let clr: Record<string, Colorable> = {};
	if (isColorObject(theme, "colors")) {
		clr = theme.colors;
	} else if (isColorObject(theme, "color")) {
		clr = theme.color;
	}

	const base = ["primary", "secondary", "error", "ghost", "gray"];

	function createColor(name: string) {
		const color = clr[name];
		if (!color) {
			return;
		}
		const fn = name === "ghost" ? createGhostThemeColor : createThemeColor;
		if (typeof color === "string") {
			copy.color[name] = fn(color, dark);
		} else if ("500" in color) {
			copy.color[name] = fn(color["500"], dark);
		} else if (color.main) {
			copy.color[name] = {
				...fn(color.main, dark),
				...color,
			};
		}
	}

	for (const name of base as JssThemeColorName[]) {
		createColor(name);
	}

	for (const name of Object.keys(clr)) {
		if (!base.includes(name)) {
			createColor(name);
		}
	}

	if (isObject<Record<string, number>>(theme.zIndex)) {
		for (const name of Object.keys(theme.zIndex)) {
			const value = theme.zIndex[name];
			if (typeof value === "number") {
				copy.zIndex[name] = value;
			}
		}
	}

	if (isObject<{ background?: string; paper?: string; color?: string }>(theme.surface)) {
		const { background, paper, color } = theme.surface;
		if (typeof background === "string") copy.surface.background = background;
		if (typeof paper === "string") copy.surface.paper = paper;
		if (typeof color === "string") copy.surface.color = color;
	} else if (copy.dark) {
		copy.surface = {
			color: "white",
			paper: hsvColor(copy.color.primary.main, 20, 63),
			background: hsvColor(copy.color.primary.main, 6, 13),
		};
	} else {
		copy.surface.background = hsvColor(copy.color.primary.main, 3, 255);
	}

	const { dark: _, darken, color, colors, fontSize, zIndex, surface, component, ...rest } = theme;
	const jssTheme: JssTheme<T> = {
		...copy,
		...rest,
		[isTheme]: true,
		component: {
			...component,
		},
	};

	theme[dark ? themeCacheDark : themeCache] = jssTheme;
	return jssTheme;
}
