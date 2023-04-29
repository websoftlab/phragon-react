import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherBatteryChargingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherBatteryChargingIcon = React.forwardRef<SVGSVGElement, FeatherBatteryChargingIconProps>(
	function FeatherBatteryChargingIcon(props, ref) {
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
				<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
				<line x1="23" y1="13" x2="23" y2="11" />
				<polyline points="11 6 7 12 13 12 9 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherBatteryChargingIcon.displayName = "FeatherBatteryChargingIcon";
}
