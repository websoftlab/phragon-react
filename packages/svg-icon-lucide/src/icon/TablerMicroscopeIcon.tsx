import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMicroscopeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMicroscopeIcon = React.forwardRef<SVGSVGElement, TablerMicroscopeIconProps>(
	function TablerMicroscopeIcon(props, ref) {
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
				<path d="M6 18h8" />
				<path d="M3 22h18" />
				<path d="M14 22a7 7 0 1 0 0-14h-1" />
				<path d="M9 14h2" />
				<path d="M8 6h4" />
				<path d="M13 10V6.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.5a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V10c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMicroscopeIcon.displayName = "TablerMicroscopeIcon";
}
