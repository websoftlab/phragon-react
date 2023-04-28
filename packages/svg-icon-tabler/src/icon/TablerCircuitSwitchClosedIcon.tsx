import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitSwitchClosedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitSwitchClosedIcon = React.forwardRef<SVGSVGElement, TablerCircuitSwitchClosedIconProps>(
	function TablerCircuitSwitchClosedIcon(props, ref) {
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
				<path d="M8 12h8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitSwitchClosedIcon.displayName = "TablerCircuitSwitchClosedIcon";
}
