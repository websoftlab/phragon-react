import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRobotOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRobotOffIcon = React.forwardRef<SVGSVGElement, TablerRobotOffIconProps>(function TablerRobotOffIcon(
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
			<path d="M11 7h6a2 2 0 0 1 2 2v1l1 1v3l-1 1m-.171 3.811a2 2 0 0 1 -1.829 1.189h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2" />
			<path d="M10 16h4" />
			<path d="M8.5 11.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M15.854 11.853a.498 .498 0 0 0 -.354 -.853a.498 .498 0 0 0 -.356 .149" />
			<path d="M8.336 4.343l-.336 -1.343" />
			<path d="M15 7l1 -4" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRobotOffIcon.displayName = "TablerRobotOffIcon";
}
