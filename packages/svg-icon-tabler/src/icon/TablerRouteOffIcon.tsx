import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRouteOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRouteOffIcon = React.forwardRef<SVGSVGElement, TablerRouteOffIconProps>(function TablerRouteOffIcon(
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
			<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M18 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M12 19h4.5c.71 0 1.372 -.212 1.924 -.576m1.545 -2.459a3.5 3.5 0 0 0 -3.469 -3.965h-.499m-4 0h-3.501a3.5 3.5 0 0 1 -2.477 -5.972m2.477 -1.028h3.5" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRouteOffIcon.displayName = "TablerRouteOffIcon";
}
