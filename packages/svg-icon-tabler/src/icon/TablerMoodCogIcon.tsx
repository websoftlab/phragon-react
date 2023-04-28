import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodCogIcon = React.forwardRef<SVGSVGElement, TablerMoodCogIconProps>(function TablerMoodCogIcon(
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
			<path d="M21 12a9 9 0 1 0 -8.983 9" />
			<path d="M18.001 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M18.001 14.5v1.5" />
			<path d="M18.001 20v1.5" />
			<path d="M21.032 16.25l-1.299 .75" />
			<path d="M16.27 19l-1.3 .75" />
			<path d="M14.97 16.25l1.3 .75" />
			<path d="M19.733 19l1.3 .75" />
			<path d="M9 10h.01" />
			<path d="M15 10h.01" />
			<path d="M9.5 15c.658 .64 1.56 1 2.5 1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodCogIcon.displayName = "TablerMoodCogIcon";
}
