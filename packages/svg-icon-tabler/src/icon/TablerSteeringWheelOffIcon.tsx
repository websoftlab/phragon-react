import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSteeringWheelOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSteeringWheelOffIcon = React.forwardRef<SVGSVGElement, TablerSteeringWheelOffIconProps>(
	function TablerSteeringWheelOffIcon(props, ref) {
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
				<path d="M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
				<path d="M10.595 10.576a2 2 0 1 0 2.827 2.83" />
				<path d="M12 14v7" />
				<path d="M10 12l-6.75 -2" />
				<path d="M15.542 11.543l5.208 -1.543" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSteeringWheelOffIcon.displayName = "TablerSteeringWheelOffIcon";
}
