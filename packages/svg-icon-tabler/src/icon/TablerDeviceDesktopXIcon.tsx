import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceDesktopXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceDesktopXIcon = React.forwardRef<SVGSVGElement, TablerDeviceDesktopXIconProps>(
	function TablerDeviceDesktopXIcon(props, ref) {
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
				<path d="M13 16h-9a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
				<path d="M7 20h6.5" />
				<path d="M9 16v4" />
				<path d="M22 22l-5 -5" />
				<path d="M17 22l5 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceDesktopXIcon.displayName = "TablerDeviceDesktopXIcon";
}
