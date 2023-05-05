import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLayoutDashboardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLayoutDashboardIcon = React.forwardRef<SVGSVGElement, TablerLayoutDashboardIconProps>(
	function TablerLayoutDashboardIcon(props, ref) {
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
				<path d="M3 3 H10 V12 H3 V3 z" />
				<path d="M14 3 H21 V8 H14 V3 z" />
				<path d="M14 12 H21 V21 H14 V12 z" />
				<path d="M3 16 H10 V21 H3 V16 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLayoutDashboardIcon.displayName = "TablerLayoutDashboardIcon";
}
