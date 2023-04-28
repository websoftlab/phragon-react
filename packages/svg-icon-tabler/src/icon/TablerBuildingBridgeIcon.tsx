import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingBridgeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingBridgeIcon = React.forwardRef<SVGSVGElement, TablerBuildingBridgeIconProps>(
	function TablerBuildingBridgeIcon(props, ref) {
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
				<path d="M6 5l0 14" />
				<path d="M18 5l0 14" />
				<path d="M2 15l20 0" />
				<path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2" />
				<path d="M12 10l0 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingBridgeIcon.displayName = "TablerBuildingBridgeIcon";
}
