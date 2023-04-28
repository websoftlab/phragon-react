import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceWatchStatsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceWatchStatsIcon = React.forwardRef<SVGSVGElement, TablerDeviceWatchStatsIconProps>(
	function TablerDeviceWatchStatsIcon(props, ref) {
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
				<path d="M6 6m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
				<path d="M9 18v3h6v-3" />
				<path d="M9 6v-3h6v3" />
				<path d="M9 14v-4" />
				<path d="M12 14v-1" />
				<path d="M15 14v-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceWatchStatsIcon.displayName = "TablerDeviceWatchStatsIcon";
}
