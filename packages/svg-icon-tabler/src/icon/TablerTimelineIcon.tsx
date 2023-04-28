import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTimelineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTimelineIcon = React.forwardRef<SVGSVGElement, TablerTimelineIconProps>(function TablerTimelineIcon(
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
			<path d="M4 16l6 -7l5 5l5 -6" />
			<path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTimelineIcon.displayName = "TablerTimelineIcon";
}
