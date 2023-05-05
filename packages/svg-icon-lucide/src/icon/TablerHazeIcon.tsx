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
			<path d="m5.2 6.2 1.4 1.4" />
			<path d="M2 13h2" />
			<path d="M20 13h2" />
			<path d="m17.4 7.6 1.4-1.4" />
			<path d="M22 17H2" />
			<path d="M22 21H2" />
			<path d="M16 13a4 4 0 0 0-8 0" />
			<path d="M12 5V2.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHazeIcon.displayName = "TablerHazeIcon";
}
