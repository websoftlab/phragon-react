import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDevicesCancelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDevicesCancelIcon = React.forwardRef<SVGSVGElement, TablerDevicesCancelIconProps>(
	function TablerDevicesCancelIcon(props, ref) {
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
				<path d="M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5" />
				<path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8" />
				<path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M17 21l4 -4" />
				<path d="M16 9h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDevicesCancelIcon.displayName = "TablerDevicesCancelIcon";
}
