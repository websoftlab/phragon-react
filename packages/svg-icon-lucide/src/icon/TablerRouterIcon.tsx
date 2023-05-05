import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRouterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRouterIcon = React.forwardRef<SVGSVGElement, TablerRouterIconProps>(function TablerRouterIcon(
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
			<path d="M4 14 H20 A2 2 0 0 1 22 16 V20 A2 2 0 0 1 20 22 H4 A2 2 0 0 1 2 20 V16 A2 2 0 0 1 4 14 z" />
			<path d="M6.01 18H6" />
			<path d="M10.01 18H10" />
			<path d="M15 10v4" />
			<path d="M17.84 7.17a4 4 0 0 0-5.66 0" />
			<path d="M20.66 4.34a8 8 0 0 0-11.31 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRouterIcon.displayName = "TablerRouterIcon";
}
