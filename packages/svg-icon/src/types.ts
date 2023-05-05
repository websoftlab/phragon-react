import type { SVGProps, ReactNode } from "react";

export type SvgIconMaker<Prop = any, Conf extends {} = {}> = (props: Prop, conf?: Conf) => ReactNode;

export type SvgIconColorType = "fill" | "stroke" | "none" | "ignore";

export interface SvgIconMakerOptions<Conf extends {} = {}> {
	color?: SvgIconColorType;
	size?: number;
	props?: SVGProps<SVGSVGElement>;
	config?: Conf;
}

export interface SvgIconExternalProps {
	title?: string;
	description?: string;
	horizontal?: boolean;
	vertical?: boolean;
	spin?: boolean | number;
}

export interface SvgIconProps<Name extends string = string> extends SVGProps<SVGSVGElement>, SvgIconExternalProps {
	icon?: SvgIconName<Name>;
	size?: null | number;
}

export type SvgIconName<Name extends string = string> = Name;
