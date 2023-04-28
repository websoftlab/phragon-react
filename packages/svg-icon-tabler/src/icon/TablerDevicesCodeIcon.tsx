import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDevicesCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDevicesCodeIcon = React.forwardRef<SVGSVGElement, TablerDevicesCodeIconProps>(
	function TablerDevicesCodeIcon(props, ref) {
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
				<path d="M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4m0 6a1 1 0 0 1 -1 1" />
				<path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h7" />
				<path d="M20 21l2 -2l-2 -2" />
				<path d="M17 17l-2 2l2 2" />
				<path d="M16 9h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDevicesCodeIcon.displayName = "TablerDevicesCodeIcon";
}
