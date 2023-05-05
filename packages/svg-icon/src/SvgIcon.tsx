import type { SvgIconName, SvgIconMaker, SvgIconProps, SvgIconMakerOptions, SvgIconColorType } from "./types";
import type {
	CSSProperties,
	ReactNode,
	ReactElement,
	SVGProps,
	Dispatch,
	SetStateAction,
	MemoExoticComponent,
	ComponentType,
} from "react";
import React, { memo, isValidElement, forwardRef, useState, useEffect } from "react";
import { __isDev__ } from "@phragon-util/global-var";
import { warning, warningOnce } from "@phragon-util/proof";

const lazyLoad: Map<string, Set<Function>> = new Map();
const icons: Map<SvgIconName, { maker: string; icon: MemoExoticComponent<ComponentType> }> = new Map();
const iconMakers: Map<
	string,
	{ color: SvgIconColorType; maker: SvgIconMaker; size: number; props: SVGProps<SVGSVGElement>; config: any }
> = new Map();

export function addSvgIconMaker<T = any>(name: string, maker: SvgIconMaker<T>, options: SvgIconMakerOptions = {}) {
	const { color = "fill", size = 24, props = {}, config } = options;
	iconMakers.set(name, { color, maker, size, props, config });
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
	const im = iconMakers.get(maker);
	if (im) {
		const loaded = icons.has(name);
		icons.set(name, { maker, icon: memo(() => makeReactElement(im.maker(icon, im.config))) });
		if (!loaded && lazyLoad.has(name)) {
			lazyLoad.get(name)!.forEach((fn) => fn());
		}
	} else {
		warningOnce(`im-notfound:${maker}`, false, `The "${maker}" icon maker not found`);
	}
}

export function addSvgIcons<Prop = any>(maker: string, data: Record<string, Prop>) {
	Object.keys(data).forEach((name) => addSvgIcon(maker, name, data[name]));
}

interface LazyState {
	name: string | null;
	loaded: boolean;
}

function makeReactElement(node: ReactNode): ReactElement {
	return isValidElement(node) ? node : <>{node}</>;
}

function createLazyLoad(name: string, fn: Dispatch<SetStateAction<LazyState>>) {
	const load = () => {
		fn({ name, loaded: true });
	};
	if (!lazyLoad.has(name)) {
		lazyLoad.set(name, new Set());
	}
	lazyLoad.get(name)!.add(load);
	return () => {
		const set = lazyLoad.get(name);
		if (!set) {
			return;
		}
		set.delete(load);
		if (set.size === 0) {
			lazyLoad.delete(name);
		}
	};
}

function mixClasses(first: string | undefined, second: string | undefined) {
	if (first != null) {
		if (!second) {
			return first;
		}
		return first ? `${first} ${second}` : second;
	} else {
		return second;
	}
}

export const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
	const {
		title = null,
		description = null,
		horizontal = false,
		vertical = false,
		spin = false,
		icon: iconProp,
		children: childrenProp,
		viewBox: viewBoxProp,
		style: styleProp,
		ref: refProp,
		size: sizeProp = null,
		...rest
	} = props;

	let iconNode: ReactNode = null;
	let children: ReactNode = childrenProp;
	let colorType: SvgIconColorType = "fill";
	let size = sizeProp || 24;
	let boxSize = sizeProp || 24;
	let svgProp: SVGProps<SVGSVGElement> = rest;
	let style: CSSProperties = {
		...styleProp,
	};

	const icon = typeof iconProp === "string" && iconProp.length > 0 ? iconProp : null;
	const { rotate = 0 } = props;
	const ic = icon && icons.get(icon);
	const transform: string[] = [];

	const [state, setState] = useState<LazyState>({ name: icon, loaded: ic != null });
	const loaded = ic != null;

	useEffect(() => {
		const name = icon;
		if (name !== state.name) {
			setState({ name, loaded });
		} else if (name && !loaded) {
			return createLazyLoad(name, setState);
		}
	}, [icon, loaded, state]);

	let freeze = false;
	if (ic) {
		const mk = iconMakers.get(ic.maker)!;
		const { style: styleProp, className, ...rest } = mk.props;
		boxSize = mk.size;
		colorType = mk.color;
		iconNode = <ic.icon />;
		svgProp = {
			...rest,
			...svgProp,
		};
		if (styleProp) {
			style = { ...styleProp, ...style };
		}
		if (className != null) {
			svgProp.className = mixClasses(svgProp.className, className);
		}
	} else if (icon) {
		freeze = true;
		boxSize = 24;
		svgProp.strokeWidth = 0;
		colorType = "fill";
		iconNode = <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />;
	} else if (children) {
		iconNode = children;
		children = null;
	}

	let viewBox: string;
	if (!icon && viewBoxProp) {
		viewBox = viewBoxProp;
	} else {
		viewBox = `0 0 ${boxSize} ${boxSize}`;
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

	if (!freeze && transform.length > 0) {
		style.transform = transform.join(" ");
		style.transformOrigin = "center";
	}

	let body: ReactNode = iconNode;
	let backdrop: ReactNode = <path stroke="none" fill="none" d={`M0 0h${boxSize}v${boxSize}H0z`} strokeWidth="0" />;

	if (!freeze && spin && body !== null) {
		const size05 = boxSize / 2;
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
				{backdrop}
				{iconNode}
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
		backdrop = null;
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
			{backdrop}
			{body}
			{children}
		</svg>
	);
});

if (__isDev__()) {
	SvgIcon.displayName = "SvgIcon";
}
