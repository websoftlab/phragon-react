import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGasStationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGasStationIcon = React.forwardRef<SVGSVGElement, TablerGasStationIconProps>(
	function TablerGasStationIcon(props, ref) {
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
				<path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" />
				<path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" />
				<path d="M3 20l12 0" />
				<path d="M18 7v1a1 1 0 0 0 1 1h1" />
				<path d="M4 11l10 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGasStationIcon.displayName = "TablerGasStationIcon";
}
