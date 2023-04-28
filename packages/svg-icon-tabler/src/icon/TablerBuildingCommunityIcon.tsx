import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingCommunityIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingCommunityIcon = React.forwardRef<SVGSVGElement, TablerBuildingCommunityIconProps>(
	function TablerBuildingCommunityIcon(props, ref) {
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
				<path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
				<path d="M13 7l0 .01" />
				<path d="M17 7l0 .01" />
				<path d="M17 11l0 .01" />
				<path d="M17 15l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingCommunityIcon.displayName = "TablerBuildingCommunityIcon";
}
