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
				<path d="M16 7h1a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-2" />
				<path d="M8 7h-2a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1" />
				<path d="M12 8l-2 4h3l-2 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBatteryChargingIcon.displayName = "TablerBatteryChargingIcon";
}
