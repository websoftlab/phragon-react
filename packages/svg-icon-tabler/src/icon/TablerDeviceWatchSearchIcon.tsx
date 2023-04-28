import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceWatchSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceWatchSearchIcon = React.forwardRef<SVGSVGElement, TablerDeviceWatchSearchIconProps>(
	function TablerDeviceWatchSearchIcon(props, ref) {
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
				<path d="M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v2" />
				<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M20.2 20.2l1.8 1.8" />
				<path d="M9 18v3h3" />
				<path d="M9 6v-3h6v3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceWatchSearchIcon.displayName = "TablerDeviceWatchSearchIcon";
}
