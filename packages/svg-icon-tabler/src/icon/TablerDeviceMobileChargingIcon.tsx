import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceMobileChargingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceMobileChargingIcon = React.forwardRef<SVGSVGElement, TablerDeviceMobileChargingIconProps>(
	function TablerDeviceMobileChargingIcon(props, ref) {
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
				<path d="M6 3m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
				<path d="M11 4h2" />
				<path d="M12 9.5l-1 2.5h2l-1 2.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceMobileChargingIcon.displayName = "TablerDeviceMobileChargingIcon";
}
