import type { Styles } from "jss";
import type { StyleSheetFactoryOptions } from "jss";
import type { Theming } from "theming";

export interface JssThemeSurface {
	color: string;
	paper: string;
	background: string;
}

export interface JssThemeColor {
	main: string;
	hover: string;
	disabled: string;
	text: string;
	badge: string;
	badgeText: string;
}

export type JssThemeColorName<ColorName extends string = string> =
	| "primary"
	| "secondary"
	| "error"
	| "ghost"
	| "gray"
	| ColorName;

export type JssTheme<T extends {} = {}> = T & {
	dark: boolean;
	fontSize: string;
	zIndex: Record<string, number>;
	surface: JssThemeSurface;
	color: Record<JssThemeColorName, JssThemeColor>;
	component: Record<string, Styles | ((theme: JssTheme<T>) => Styles)>;
};

export interface CreateUseStylesOptions<T extends {} = {}> extends StyleSheetFactoryOptions {
	name?: string;
	index?: number;
	theming?: Theming<JssTheme<T>>;
}
