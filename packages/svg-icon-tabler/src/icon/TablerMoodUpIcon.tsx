import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodUpIcon = React.forwardRef<SVGSVGElement, TablerMoodUpIconProps>(function TablerMoodUpIcon(
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
			<path d="M20.984 12.536a9 9 0 1 0 -8.463 8.449" />
			<path d="M19 22v-6" />
			<path d="M22 19l-3 -3l-3 3" />
			<path d="M9 10h.01" />
			<path d="M15 10h.01" />
			<path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodUpIcon.displayName = "TablerMoodUpIcon";
}
