import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRainbowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRainbowIcon = React.forwardRef<SVGSVGElement, TablerRainbowIconProps>(function TablerRainbowIcon(
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
			<path d="M22 17c0 -5.523 -4.477 -10 -10 -10s-10 4.477 -10 10" />
			<path d="M18 17a6 6 0 1 0 -12 0" />
			<path d="M14 17a2 2 0 1 0 -4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRainbowIcon.displayName = "TablerRainbowIcon";
}
