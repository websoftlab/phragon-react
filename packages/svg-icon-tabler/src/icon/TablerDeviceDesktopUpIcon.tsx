import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceDesktopUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceDesktopUpIcon = React.forwardRef<SVGSVGElement, TablerDeviceDesktopUpIconProps>(
	function TablerDeviceDesktopUpIcon(props, ref) {
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
				<path d="M13.5 16h-9.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
				<path d="M19 22v-6" />
				<path d="M22 19l-3 -3l-3 3" />
				<path d="M7 20h5" />
				<path d="M9 16v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceDesktopUpIcon.displayName = "TablerDeviceDesktopUpIcon";
}
