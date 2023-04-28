import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDashboardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDashboardIcon = React.forwardRef<SVGSVGElement, TablerDashboardIconProps>(
	function TablerDashboardIcon(props, ref) {
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
				<path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M13.45 11.55l2.05 -2.05" />
				<path d="M6.4 20a9 9 0 1 1 11.2 0z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDashboardIcon.displayName = "TablerDashboardIcon";
}
