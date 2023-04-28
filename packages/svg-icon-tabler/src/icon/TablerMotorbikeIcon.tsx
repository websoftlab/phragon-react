import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMotorbikeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMotorbikeIcon = React.forwardRef<SVGSVGElement, TablerMotorbikeIconProps>(
	function TablerMotorbikeIcon(props, ref) {
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
				<path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
				<path d="M13 6h2l1.5 3l2 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMotorbikeIcon.displayName = "TablerMotorbikeIcon";
}
