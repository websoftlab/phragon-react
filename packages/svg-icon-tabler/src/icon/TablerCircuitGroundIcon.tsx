import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitGroundIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitGroundIcon = React.forwardRef<SVGSVGElement, TablerCircuitGroundIconProps>(
	function TablerCircuitGroundIcon(props, ref) {
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
				<path d="M12 13v-8" />
				<path d="M4 13h16" />
				<path d="M7 16h10" />
				<path d="M10 19h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitGroundIcon.displayName = "TablerCircuitGroundIcon";
}
