import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingBroadcastTowerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingBroadcastTowerIcon = React.forwardRef<SVGSVGElement, TablerBuildingBroadcastTowerIconProps>(
	function TablerBuildingBroadcastTowerIcon(props, ref) {
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
				<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M16.616 13.924a5 5 0 1 0 -9.23 0" />
				<path d="M20.307 15.469a9 9 0 1 0 -16.615 0" />
				<path d="M9 21l3 -9l3 9" />
				<path d="M10 19h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingBroadcastTowerIcon.displayName = "TablerBuildingBroadcastTowerIcon";
}
