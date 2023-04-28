import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandD3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandD3Icon = React.forwardRef<SVGSVGElement, TablerBrandD3IconProps>(function TablerBrandD3Icon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M3 4h1.8c3.976 0 7.2 3.582 7.2 8s-3.224 8 -7.2 8h-1.8" />
			<path d="M12 4h5.472c1.948 0 3.528 1.79 3.528 4s-1.58 4 -3.528 4" />
			<path d="M17.472 12h-2.472" />
			<path d="M17.472 12h-2.352" />
			<path d="M17.472 12c1.948 0 3.528 1.79 3.528 4s-1.58 4 -3.528 4h-5.472" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrandD3Icon.displayName = "TablerBrandD3Icon";
}
