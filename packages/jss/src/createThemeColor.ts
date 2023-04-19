import type { JssThemeColor } from "./types";
import { TinyColor } from "@ctrl/tinycolor";
import { hsv, hsvColor } from "./util";

const cache: Map<string, JssThemeColor> = new Map();

export function createGhostThemeColor(color: string, dark: boolean = false) {
	const key = (dark ? "dark." : "") + "ghost." + color;
	const fromCache = cache.get(key);
	if (fromCache) {
		return fromCache;
	}

	let tiny = new TinyColor(color);
	if (!tiny.isValid) {
		tiny = new TinyColor("#4d545e");
	}

	const base = hsv(tiny, 8, 200);
	const badge = base.shade(10);
	const themeColor: JssThemeColor = {
		badge: (dark ? badge.darken(30) : badge.lighten(15)).setAlpha(0.8).toRgbString(),
		badgeText: base.shade(dark ? 20 : 30).toHexString(),
		text: (dark ? base.tint(80) : base.shade(80)).setAlpha(0.8).toRgbString(),
		main: base.setAlpha(0.08).toRgbString(),
		hover: base.setAlpha(0.25).toRgbString(),
		disabled: base.setAlpha(0.15).toRgbString(),
	};

	cache.set(key, themeColor);
	return themeColor;
}

export function createThemeColor(color: string, dark: boolean = false): JssThemeColor {
	const key = (dark ? "dark." : "") + color;
	const fromCache = cache.get(key);
	if (fromCache) {
		return fromCache;
	}

	let tiny = new TinyColor(color);
	if (!tiny.isValid) {
		tiny = new TinyColor("#4d545e");
	}

	tiny.setAlpha(1);

	let hover: string, text: string;

	if (tiny.isLight()) {
		text = tiny.shade(90).toHexString();
		hover = tiny.darken(6).toHexString();
	} else {
		text = tiny.tint(90).toHexString();
		hover = tiny.lighten(6).toHexString();
	}

	const themeColor: JssThemeColor = {
		main: tiny.toHexString(),
		hover,
		badge: hsvColor(tiny, dark ? 45 : 35, 255),
		badgeText: hsvColor(tiny, dark ? 70 : 60, 100),
		disabled: (tiny.isMonochrome() ? tiny.lighten(10) : tiny.desaturate(50)).toHexString(),
		text,
	};

	cache.set(key, themeColor);
	return themeColor;
}
