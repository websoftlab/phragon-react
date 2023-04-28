import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceRemoteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceRemoteIcon = React.forwardRef<SVGSVGElement, TablerDeviceRemoteIconProps>(
	function TablerDeviceRemoteIcon(props, ref) {
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
				<path d="M12 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M7 3m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
				<path d="M12 3v2" />
				<path d="M10 15v.01" />
				<path d="M10 18v.01" />
				<path d="M14 18v.01" />
				<path d="M14 15v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceRemoteIcon.displayName = "TablerDeviceRemoteIcon";
}
