import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodEditIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodEditIcon = React.forwardRef<SVGSVGElement, TablerMoodEditIconProps>(function TablerMoodEditIcon(
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
			<path d="M20.955 11.104a9 9 0 1 0 -9.895 9.847" />
			<path d="M9 10h.01" />
			<path d="M15 10h.01" />
			<path d="M9.5 15c.658 .672 1.56 1 2.5 1c.126 0 .251 -.006 .376 -.018" />
			<path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodEditIcon.displayName = "TablerMoodEditIcon";
}
