import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodXIcon = React.forwardRef<SVGSVGElement, TablerMoodXIconProps>(function TablerMoodXIcon(
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
			<path d="M20.983 12.556a9 9 0 1 0 -8.433 8.427" />
			<path d="M9 10h.01" />
			<path d="M15 10h.01" />
			<path d="M9.5 15c.658 .64 1.56 1 2.5 1c.194 0 .386 -.015 .574 -.045" />
			<path d="M21.5 21.5l-5 -5" />
			<path d="M16.5 21.5l5 -5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodXIcon.displayName = "TablerMoodXIcon";
}
