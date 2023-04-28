import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRippleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRippleIcon = React.forwardRef<SVGSVGElement, TablerRippleIconProps>(function TablerRippleIcon(
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
			<path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" />
			<path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" />
			<path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRippleIcon.displayName = "TablerRippleIcon";
}
