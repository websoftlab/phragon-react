import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBatteryChargingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBatteryChargingIcon = React.forwardRef<SVGSVGElement, TablerBatteryChargingIconProps>(
	function TablerBatteryChargingIcon(props, ref) {
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
				<path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
				<path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
				<path d="m11 7-3 5h4l-3 5" />
				<path d="M22 11 L22 13" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBatteryChargingIcon.displayName = "TablerBatteryChargingIcon";
}
