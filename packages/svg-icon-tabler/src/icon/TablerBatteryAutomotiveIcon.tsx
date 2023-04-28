import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBatteryAutomotiveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBatteryAutomotiveIcon = React.forwardRef<SVGSVGElement, TablerBatteryAutomotiveIconProps>(
	function TablerBatteryAutomotiveIcon(props, ref) {
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
				<path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M6 6v-2" />
				<path d="M19 4l0 2" />
				<path d="M6.5 13l3 0" />
				<path d="M14.5 13l3 0" />
				<path d="M16 11.5l0 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBatteryAutomotiveIcon.displayName = "TablerBatteryAutomotiveIcon";
}
