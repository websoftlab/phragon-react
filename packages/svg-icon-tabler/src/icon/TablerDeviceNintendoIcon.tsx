import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceNintendoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceNintendoIcon = React.forwardRef<SVGSVGElement, TablerDeviceNintendoIconProps>(
	function TablerDeviceNintendoIcon(props, ref) {
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
				<path d="M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3z" />
				<path d="M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3z" />
				<path d="M16.5,15.5a1,1 0 1,0 2,0a1,1 0 1,0 -2,0" />
				<path d="M5.5,8.5a1,1 0 1,0 2,0a1,1 0 1,0 -2,0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceNintendoIcon.displayName = "TablerDeviceNintendoIcon";
}
