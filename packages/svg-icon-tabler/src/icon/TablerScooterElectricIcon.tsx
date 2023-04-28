import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScooterElectricIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScooterElectricIcon = React.forwardRef<SVGSVGElement, TablerScooterElectricIconProps>(
	function TablerScooterElectricIcon(props, ref) {
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
				<path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1" />
				<path d="M10 4l-2 4h3l-2 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerScooterElectricIcon.displayName = "TablerScooterElectricIcon";
}
