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
			<path d="M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
			<path d="M17 17l0 .01" />
			<path d="M13 17l0 .01" />
			<path d="M15 13l0 -2" />
			<path d="M11.75 8.75a4 4 0 0 1 6.5 0" />
			<path d="M8.5 6.5a8 8 0 0 1 13 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRouterIcon.displayName = "TablerRouterIcon";
}
