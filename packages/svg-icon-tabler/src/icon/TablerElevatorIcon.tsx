import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerElevatorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerElevatorIcon = React.forwardRef<SVGSVGElement, TablerElevatorIconProps>(function TablerElevatorIcon(
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
			<path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
			<path d="M10 10l2 -2l2 2" />
			<path d="M10 14l2 2l2 -2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerElevatorIcon.displayName = "TablerElevatorIcon";
}
