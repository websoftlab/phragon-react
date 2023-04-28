import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitCellIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitCellIcon = React.forwardRef<SVGSVGElement, TablerCircuitCellIconProps>(
	function TablerCircuitCellIcon(props, ref) {
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
				<path d="M2 12h8" />
				<path d="M14 12h8" />
				<path d="M10 5v14" />
				<path d="M14 9v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitCellIcon.displayName = "TablerCircuitCellIcon";
}
