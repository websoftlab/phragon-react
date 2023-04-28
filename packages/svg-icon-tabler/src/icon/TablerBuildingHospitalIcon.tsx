import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingHospitalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingHospitalIcon = React.forwardRef<SVGSVGElement, TablerBuildingHospitalIconProps>(
	function TablerBuildingHospitalIcon(props, ref) {
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
				<path d="M3 21l18 0" />
				<path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
				<path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
				<path d="M10 9l4 0" />
				<path d="M12 7l0 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingHospitalIcon.displayName = "TablerBuildingHospitalIcon";
}
