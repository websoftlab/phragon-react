import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEmergencyBedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEmergencyBedIcon = React.forwardRef<SVGSVGElement, TablerEmergencyBedIconProps>(
	function TablerEmergencyBedIcon(props, ref) {
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
				<path d="M16 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M8 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5" />
				<path d="M10 6h4" />
				<path d="M12 4v4" />
				<path d="M12 12v2l-2.5 2.5" />
				<path d="M14.5 16.5l-2.5 -2.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEmergencyBedIcon.displayName = "TablerEmergencyBedIcon";
}
