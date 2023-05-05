import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitBoardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitBoardIcon = React.forwardRef<SVGSVGElement, TablerCircuitBoardIconProps>(
	function TablerCircuitBoardIcon(props, ref) {
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
				<path d="M11 9h4a2 2 0 0 0 2-2V3" />
				<path d="M11 9 A2 2 0 0 1 9 11 A2 2 0 0 1 7 9 A2 2 0 0 1 11 9" />
				<path d="M7 21v-4a2 2 0 0 1 2-2h4" />
				<path d="M17 15 A2 2 0 0 1 15 17 A2 2 0 0 1 13 15 A2 2 0 0 1 17 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitBoardIcon.displayName = "TablerCircuitBoardIcon";
}
