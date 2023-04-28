import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceWatchXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceWatchXIcon = React.forwardRef<SVGSVGElement, TablerDeviceWatchXIconProps>(
	function TablerDeviceWatchXIcon(props, ref) {
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
				<path d="M13 18h-4a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" />
				<path d="M9 18v3h4" />
				<path d="M9 6v-3h6v3" />
				<path d="M22 22l-5 -5" />
				<path d="M17 22l5 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceWatchXIcon.displayName = "TablerDeviceWatchXIcon";
}
