import type { SVGProps, ReactNode } from "react";

export type SvgIconMaker<Prop = any> = (props: Prop) => ReactNode;

export type SvgIconColorType = "fill" | "stroke" | "none" | "ignore";

export interface SvgIconMakerOptions {
	color?: SvgIconColorType;
	size?: number;
	props?: SVGProps<SVGSVGElement>;
}

export interface SvgIconProps<Name extends string = string> extends SVGProps<SVGSVGElement> {
	icon?: SvgIconName<Name>;
	title?: string;
	description?: string;
	horizontal?: boolean;
	vertical?: boolean;
	spin?: boolean | number;
	size?: null | number;
}

export type SvgIconName<Name extends string = string> = Name;
