import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceImacPinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceImacPinIcon = React.forwardRef<SVGSVGElement, TablerDeviceImacPinIconProps>(
	function TablerDeviceImacPinIcon(props, ref) {
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
				<path d="M12 17h-8a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
				<path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
				<path d="M19 18v.01" />
				<path d="M3 13h11" />
				<path d="M8 21h4.5" />
				<path d="M10 17l-.5 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceImacPinIcon.displayName = "TablerDeviceImacPinIcon";
}
