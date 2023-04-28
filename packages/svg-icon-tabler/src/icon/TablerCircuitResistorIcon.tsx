import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitResistorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitResistorIcon = React.forwardRef<SVGSVGElement, TablerCircuitResistorIconProps>(
	function TablerCircuitResistorIcon(props, ref) {
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
				<path d="M2 12h2l2 -5l3 10l3 -10l3 10l3 -10l1.5 5h2.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitResistorIcon.displayName = "TablerCircuitResistorIcon";
}
