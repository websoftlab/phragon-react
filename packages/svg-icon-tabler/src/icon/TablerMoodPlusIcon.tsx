import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodPlusIcon = React.forwardRef<SVGSVGElement, TablerMoodPlusIconProps>(function TablerMoodPlusIcon(
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
			<path d="M20.985 12.528a9 9 0 1 0 -8.45 8.456" />
			<path d="M16 19h6" />
			<path d="M19 16v6" />
			<path d="M9 10h.01" />
			<path d="M15 10h.01" />
			<path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodPlusIcon.displayName = "TablerMoodPlusIcon";
}
