import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRockingChairIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRockingChairIcon = React.forwardRef<SVGSVGElement, TablerRockingChairIconProps>(
	function TablerRockingChairIcon(props, ref) {
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
				<path d="M3.5 2 L6.5 12.5 L18 12.5" />
				<path d="M9.5 12.5 L5.5 20" />
				<path d="M15 12.5 L18.5 20" />
				<path d="M2.75 18a13 13 0 0 0 18.5 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRockingChairIcon.displayName = "TablerRockingChairIcon";
}
