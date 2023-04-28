import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingTunnelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingTunnelIcon = React.forwardRef<SVGSVGElement, TablerBuildingTunnelIconProps>(
	function TablerBuildingTunnelIcon(props, ref) {
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
				<path d="M5 21h14a2 2 0 0 0 2 -2v-7a9 9 0 0 0 -18 0v7a2 2 0 0 0 2 2z" />
				<path d="M8 21v-9a4 4 0 1 1 8 0v9" />
				<path d="M3 17h4" />
				<path d="M17 17h4" />
				<path d="M21 12h-4" />
				<path d="M7 12h-4" />
				<path d="M12 3v5" />
				<path d="M6 6l3 3" />
				<path d="M15 9l3 -3l-3 3z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingTunnelIcon.displayName = "TablerBuildingTunnelIcon";
}
