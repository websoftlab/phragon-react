import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRobotIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRobotIcon = React.forwardRef<SVGSVGElement, TablerRobotIconProps>(function TablerRobotIcon(
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
			<path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z" />
			<path d="M10 16h4" />
			<path d="M8,11.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M15,11.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M9 7l-1 -4" />
			<path d="M15 7l1 -4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRobotIcon.displayName = "TablerRobotIcon";
}
