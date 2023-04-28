import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitCellPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitCellPlusIcon = React.forwardRef<SVGSVGElement, TablerCircuitCellPlusIconProps>(
	function TablerCircuitCellPlusIcon(props, ref) {
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
				<path d="M2 12h9" />
				<path d="M15 12h7" />
				<path d="M11 5v14" />
				<path d="M15 9v6" />
				<path d="M3 5h4" />
				<path d="M5 3v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitCellPlusIcon.displayName = "TablerCircuitCellPlusIcon";
}
