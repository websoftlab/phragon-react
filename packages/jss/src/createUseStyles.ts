import type { CreateUseStylesOptions, JssTheme } from "./types";
import type { Classes, JssStyle, Styles } from "jss";
import { createUseStyles as createUseStylesJss } from "react-jss";
import { createTheme } from "./createTheme";
import { isObject } from "./util";

function toJssStyle(style: unknown) {
	if (typeof style === "string" || style == null) {
		return {} as JssStyle<undefined>;
	}
	if (Array.isArray(style)) {
		return style.reduce<JssStyle<undefined>>((prev, current) => Object.assign(prev, current), {});
	}
	return (typeof style === "object" ? style : {}) as JssStyle<undefined>;
}

function merge<C extends string, Props>(origin: Styles<C, Props>, component: Styles<C, Props>) {
	origin = { ...origin } as Styles<C, Props>;

	for (const key of Object.keys(component) as C[]) {
		const originStyle = origin[key];
		const componentStyle = component[key];

		if (key.startsWith("@")) {
			if (
				key.startsWith("@media ") &&
				isObject<Styles<C, Props>>(originStyle) &&
				isObject<Styles<C, Props>>(componentStyle)
			) {
				origin[key] = merge(originStyle, componentStyle);
			} else {
				origin[key] = componentStyle;
			}
		} else if (originStyle && componentStyle != null) {
			origin[key] = (data) => {
				return {
					...toJssStyle(typeof originStyle === "function" ? originStyle(data) : originStyle),
					...toJssStyle(typeof componentStyle === "function" ? componentStyle(data) : componentStyle),
				};
			};
		}
	}

	return origin;
}

const cacheKey = Symbol();

type CacheObject<C extends string = string, Props = unknown, Theme extends {} = {}> = {
	[key: symbol]: null | {
		name: string;
		callback: (data?: Props & { theme?: JssTheme<Theme> }) => Classes<C>;
	};
};

function isCacheable<C extends string = string, Props = unknown, Theme extends {} = {}>(
	styles: unknown
): styles is CacheObject<C, Props, Theme> {
	return typeof styles === "function" || isObject<CacheObject<C, Props, Theme>>(styles);
}

function cached<C extends string = string, Props = unknown, Theme extends {} = {}>(
	styles: unknown,
	name: string = ""
): null | ((data?: Props & { theme?: JssTheme<Theme> }) => Classes<C>) {
	if (!isCacheable<C, Props, Theme>(styles)) {
		return null;
	}

	const cache = styles[cacheKey];
	if (!cache) {
		return null;
	}

	if (cache.name !== name) {
		styles[cacheKey] = null;
		return null;
	}

	return cache.callback;
}

function cache<C extends string = string, Props = unknown, Theme extends {} = {}>(
	styles: unknown,
	name: string = "",
	callback: (data?: Props & { theme?: JssTheme<Theme> }) => Classes<C>
) {
	if (isCacheable<C, Props, Theme>(styles)) {
		styles[cacheKey] = { name, callback };
	}
	return callback;
}

export function createUseStyles<C extends string = string, Props = unknown, Theme extends {} = {}>(
	styles: Styles<C, Props, JssTheme<Theme>> | ((theme: JssTheme<Theme>) => Styles<C, Props>),
	options: CreateUseStylesOptions<Theme> = {}
): (data?: Props & { theme?: JssTheme<Theme> }) => Classes<C> {
	const { name } = options;

	let callback = cached<C, Props, Theme>(styles, name);
	if (callback != null) {
		return callback;
	}

	if (name) {
		callback = createUseStylesJss<C, Props, JssTheme<Theme>>((theme) => {
			theme = createTheme<Theme>(theme);

			let origin: Styles<C, Props>;
			if (typeof styles === "function") {
				origin = styles(theme);
			} else {
				origin = styles as Styles<C, Props>;
			}

			const componentOrigin = theme.component[name] as
				| Styles<C, Props, JssTheme<Theme>>
				| ((theme: JssTheme<Theme>) => Styles<C, Props>)
				| undefined;

			let component: Styles<C, Props>;
			if (typeof componentOrigin === "function") {
				component = componentOrigin(theme);
			} else if (componentOrigin) {
				component = componentOrigin as Styles<C, Props>;
			} else {
				return origin;
			}

			return merge(origin, component);
		}, options);
	} else if (typeof styles === "function") {
		const cb = styles;
		callback = createUseStylesJss<C, Props, JssTheme<Theme>>((theme) => cb(createTheme(theme)), options);
	} else {
		callback = createUseStylesJss<C, Props, JssTheme<Theme>>(styles, options);
	}

	return cache(styles, name, callback);
}
