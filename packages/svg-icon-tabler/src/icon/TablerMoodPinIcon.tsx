import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodPinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodPinIcon = React.forwardRef<SVGSVGElement, TablerMoodPinIconProps>(function TablerMoodPinIcon(
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
			<path d="M21 12a9 9 0 1 0 -8.352 8.977" />
			<path d="M9 10h.01" />
			<path d="M15 10h.01" />
			<path d="M9.5 15c.658 .672 1.56 1 2.5 1c.102 0 .203 -.004 .304 -.012" />
			<path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
			<path d="M19 18v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodPinIcon.displayName = "TablerMoodPinIcon";
}
