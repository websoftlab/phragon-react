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
				<path d="M4 4h6v8h-6z" />
				<path d="M4 16h6v4h-6z" />
				<path d="M14 12h6v8h-6z" />
				<path d="M14 4h6v4h-6z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLayoutDashboardIcon.displayName = "TablerLayoutDashboardIcon";
}
