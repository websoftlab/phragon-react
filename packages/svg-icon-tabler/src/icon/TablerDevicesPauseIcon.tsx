import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDevicesPauseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDevicesPauseIcon = React.forwardRef<SVGSVGElement, TablerDevicesPauseIconProps>(
	function TablerDevicesPauseIcon(props, ref) {
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
				<path d="M13 19v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" />
				<path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
				<path d="M17 17v5" />
				<path d="M21 17v5" />
				<path d="M16 9h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDevicesPauseIcon.displayName = "TablerDevicesPauseIcon";
}
