import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitSwitchOpenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitSwitchOpenIcon = React.forwardRef<SVGSVGElement, TablerCircuitSwitchOpenIconProps>(
	function TablerCircuitSwitchOpenIcon(props, ref) {
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
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M7.5 10.5l7.5 -5.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitSwitchOpenIcon.displayName = "TablerCircuitSwitchOpenIcon";
}
