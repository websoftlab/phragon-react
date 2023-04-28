import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGasStationOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGasStationOffIcon = React.forwardRef<SVGSVGElement, TablerGasStationOffIconProps>(
	function TablerGasStationOffIcon(props, ref) {
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
				<path d="M15 11a2 2 0 0 1 2 2m3 3v-7l-3 -3" />
				<path d="M4 20v-14c0 -.548 .22 -1.044 .577 -1.405m3.423 -.595h4a2 2 0 0 1 2 2v4m0 4v6" />
				<path d="M3 20h12" />
				<path d="M18 7v1a1 1 0 0 0 1 1h1" />
				<path d="M4 11h7" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGasStationOffIcon.displayName = "TablerGasStationOffIcon";
}
