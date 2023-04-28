import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingCastleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingCastleIcon = React.forwardRef<SVGSVGElement, TablerBuildingCastleIconProps>(
	function TablerBuildingCastleIcon(props, ref) {
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
				<path d="M15 19v-2a3 3 0 0 0 -6 0v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14h4v3h3v-3h4v3h3v-3h4v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
				<path d="M3 11l18 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingCastleIcon.displayName = "TablerBuildingCastleIcon";
}
