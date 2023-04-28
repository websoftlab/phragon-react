import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingMonumentIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingMonumentIcon = React.forwardRef<SVGSVGElement, TablerBuildingMonumentIconProps>(
	function TablerBuildingMonumentIcon(props, ref) {
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
				<path d="M8 18l2 -13l2 -2l2 2l2 13" />
				<path d="M5 21v-3h14v3" />
				<path d="M3 21l18 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingMonumentIcon.displayName = "TablerBuildingMonumentIcon";
}
