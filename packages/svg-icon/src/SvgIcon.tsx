import type { SvgIconName, SvgIconMaker, SvgIconProps, SvgIconMakerOptions, SvgIconColorType } from "./types";
import type { CSSProperties, ReactNode, SVGProps } from "react";
import React, { forwardRef } from "react";
import { __isDev__ } from "@phragon-util/global-var";
import { warning } from "@phragon-util/proof";

const icons: Map<SvgIconName, { maker: string; icon: any }> = new Map();
const iconMakers: Map<
	string,
	{ color: SvgIconColorType; maker: SvgIconMaker; size: number; props: SVGProps<SVGSVGElement> }
> = new Map();

export function addSvgIconMaker<T = any>(name: string, maker: SvgIconMaker<T>, options: SvgIconMakerOptions = {}) {
	const { color = "fill", size = 24, props = {} } = options;
	iconMakers.set(name, { color, maker, size, props });
}

export function isSvgIconName<Name extends string = string>(name: any): name is SvgIconName<Name> {
	return typeof name === "string" && icons.has(name);
}

export function svgIconNames<Name extends string = string>(): SvgIconName<Name>[] {
	return [...icons.keys()] as SvgIconName<Name>[];
}

export function addSvgIcon<Name extends string = string, Prop = any>(
	maker: string,
	name: SvgIconName<Name>,
	icon: Prop
) {
	if (iconMakers.has(maker)) {
		icons.set(name, { maker, icon });
	}
}

export function addSvgIcons<Prop = any>(maker: string, data: Record<string, Prop>) {
	Object.keys(data).forEach((name) => addSvgIcon(maker, name, data[name]));
}

export const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
	const {
		icon,
		children,
		title = null,
		description = null,
		horizontal = false,
		vertical = false,
		spin = false,
		viewBox: viewBoxProp,
		style: styleProp,
		ref: refProp,
		size: sizeProp = null,
		...rest
	} = props;

	let iconNode: ReactNode = null;
	let colorType: SvgIconColorType = "fill";
	let size = sizeProp || 24;
	let svgProp: SVGProps<SVGSVGElement> = rest;

	const { rotate = 0 } = props;
	const ic = icon && icons.get(icon);
	const transform: string[] = [];
	const style: CSSProperties = {
		...styleProp,
	};

	if (ic) {
		const mk = iconMakers.get(ic.maker)!;
		colorType = mk.color;
		iconNode = mk.maker(ic.icon);
		svgProp = {
			...svgProp,
			...mk.props,
		};
		if (sizeProp == null) {
			size = mk.size;
		}
	}

	let viewBox: string;
	if (viewBoxProp) {
		viewBox = viewBoxProp;
	} else {
		viewBox = `0 0 ${size} ${size}`;
	}

	if (horizontal) {
		transform.push("scaleX(-1)");
	}
	if (vertical) {
		transform.push("scaleY(-1)");
	}
	if (rotate !== 0) {
		transform.push(`rotate(${rotate}deg)`);
	}

	if (transform.length > 0) {
		style.transform = transform.join(" ");
		style.transformOrigin = "center";
	}

	let body: ReactNode = iconNode;

	if (spin && body !== null) {
		const size05 = size / 2;
		let inverse = false;
		let spinSec = 3;
		if (typeof spin === "number") {
			spinSec = spin;
			if (spinSec < 0) {
				spinSec *= -1;
				inverse = true;
			}
		}
		body = (
			<g>
				{iconNode}
				{!(horizontal || vertical || rotate !== 0) && (
					<rect width={size} height={size} fill="transparent" stroke="transparent" strokeWidth="0" />
				)}
				<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="rotate"
					repeatCount="indefinite"
					dur={`${spinSec}s`}
					from={`0 ${size05} ${size05}`}
					to={`${inverse ? "-360" : "360"} ${size05} ${size05}`}
				/>
			</g>
		);
	}

	let ariaLabelledby;
	let labelledById = rest.id ? `icon_labelledby_${rest.id}` : undefined;
	let describedById = rest.id ? `icon_describedby_${rest.id}` : undefined;
	let role;

	if (title) {
		if (rest.id) {
			ariaLabelledby = description ? `${labelledById} ${describedById}` : labelledById;
		}
	} else {
		role = "presentation";
		warning(!description, "title attribute required when description is set");
	}

	return (
		<svg
			ref={ref}
			viewBox={viewBox}
			width={`${size}px`}
			height={`${size}px`}
			role={role}
			aria-labelledby={ariaLabelledby}
			style={style}
			fill={colorType === "fill" ? "currentColor" : colorType === "ignore" ? undefined : "none"}
			stroke={colorType === "stroke" ? "currentColor" : colorType === "ignore" ? undefined : "none"}
			{...svgProp}
		>
			{title && <title id={labelledById}>{title}</title>}
			{description && <desc id={describedById}>{description}</desc>}
			{body}
			{children}
		</svg>
	);
});

if (__isDev__()) {
	SvgIcon.displayName = "SvgIcon";
}
