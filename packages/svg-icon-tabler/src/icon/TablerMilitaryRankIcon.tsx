import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMilitaryRankIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMilitaryRankIcon = React.forwardRef<SVGSVGElement, TablerMilitaryRankIconProps>(
	function TablerMilitaryRankIcon(props, ref) {
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
				<path d="M17 7v13h-10v-13l5 -3z" />
				<path d="M10 13l2 -1l2 1" />
				<path d="M10 17l2 -1l2 1" />
				<path d="M10 9l2 -1l2 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMilitaryRankIcon.displayName = "TablerMilitaryRankIcon";
}
