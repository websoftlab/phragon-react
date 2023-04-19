import type { JssThemeColor } from "./types";
import { TinyColor } from "@ctrl/tinycolor";

export function hsv(color: TinyColor | string, s: number, v: number, a: number = 100) {
	if (typeof color === "string") {
		color = new TinyColor(color);
	}
	const hsv = color.toHsv();
	hsv.s = s / 100;
	hsv.v = v / 255;
	hsv.a = a > 99 ? 1 : a / 100;
	return new TinyColor(hsv);
}

export function hsvColor(color: TinyColor | string, s: number, v: number, a: number = 100) {
	color = hsv(color, s, v, a);
	return color.a === 1 ? color.toHexString() : color.toRgbString();
}

export function isObject<Type>(obj: any): obj is Type {
	return obj != null && typeof obj === "object" && !Array.isArray(obj);
}

export type Colorable = string | { 500: string } | Partial<JssThemeColor>;

export function isColorObject<Key extends string>(obj: any, key: Key): obj is Record<Key, Record<string, Colorable>> {
	if (!isObject<any>(obj) || !isObject(obj[key])) {
		return false;
	}
	const colorList = obj[key];
	const keys = Object.keys(colorList);
	if (keys.length === 0) {
		return false;
	}
	const color = colorList[keys[0]];
	if (typeof color === "string") {
		return true;
	}
	if (!isObject<{}>(color)) {
		return false;
	}
	return "500" in color || "main" in color;
}
