import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGrillForkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGrillForkIcon = React.forwardRef<SVGSVGElement, TablerGrillForkIconProps>(
	function TablerGrillForkIcon(props, ref) {
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
				<path d="M5 5l11.5 11.5" />
				<path d="M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772z" />
				<path d="M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1 -4.1l-3.15 -3.05" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGrillForkIcon.displayName = "TablerGrillForkIcon";
}
