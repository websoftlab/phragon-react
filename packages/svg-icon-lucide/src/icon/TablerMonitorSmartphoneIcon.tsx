import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMonitorSmartphoneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMonitorSmartphoneIcon = React.forwardRef<SVGSVGElement, TablerMonitorSmartphoneIconProps>(
	function TablerMonitorSmartphoneIcon(props, ref) {
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
				<path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
				<path d="M10 19v-3.96 3.15" />
				<path d="M7 19h5" />
				<path d="M18 12 H20 A2 2 0 0 1 22 14 V20 A2 2 0 0 1 20 22 H18 A2 2 0 0 1 16 20 V14 A2 2 0 0 1 18 12 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMonitorSmartphoneIcon.displayName = "TablerMonitorSmartphoneIcon";
}
