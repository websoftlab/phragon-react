import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPanelTopInactiveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPanelTopInactiveIcon = React.forwardRef<SVGSVGElement, TablerPanelTopInactiveIconProps>(
	function TablerPanelTopInactiveIcon(props, ref) {
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
				<path d="M5 3 H19 A2 2 0 0 1 21 5 V19 A2 2 0 0 1 19 21 H5 A2 2 0 0 1 3 19 V5 A2 2 0 0 1 5 3 z" />
				<path d="M14 9h1" />
				<path d="M19 9h2" />
				<path d="M3 9h2" />
				<path d="M9 9h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPanelTopInactiveIcon.displayName = "TablerPanelTopInactiveIcon";
}
