import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeStatsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeStatsIcon = React.forwardRef<SVGSVGElement, TablerHomeStatsIconProps>(
	function TablerHomeStatsIcon(props, ref) {
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
				<path d="M19 13v-1h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h2.5" />
				<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
				<path d="M13 22l3 -3l2 2l4 -4" />
				<path d="M19 17h3v3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHomeStatsIcon.displayName = "TablerHomeStatsIcon";
}
