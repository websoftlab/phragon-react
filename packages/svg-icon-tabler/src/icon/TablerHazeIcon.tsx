import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHazeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHazeIcon = React.forwardRef<SVGSVGElement, TablerHazeIconProps>(function TablerHazeIcon(props, ref) {
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
			<path d="M3 12h1" />
			<path d="M12 3v1" />
			<path d="M20 12h1" />
			<path d="M5.6 5.6l.7 .7" />
			<path d="M18.4 5.6l-.7 .7" />
			<path d="M8 12a4 4 0 1 1 8 0" />
			<path d="M3 16h18" />
			<path d="M3 20h18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHazeIcon.displayName = "TablerHazeIcon";
}
