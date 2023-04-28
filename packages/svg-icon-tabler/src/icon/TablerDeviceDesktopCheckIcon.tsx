import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceDesktopCheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceDesktopCheckIcon = React.forwardRef<SVGSVGElement, TablerDeviceDesktopCheckIconProps>(
	function TablerDeviceDesktopCheckIcon(props, ref) {
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
				<path d="M12 16h-8a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
				<path d="M15 19l2 2l4 -4" />
				<path d="M7 20h4" />
				<path d="M9 16v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceDesktopCheckIcon.displayName = "TablerDeviceDesktopCheckIcon";
}
