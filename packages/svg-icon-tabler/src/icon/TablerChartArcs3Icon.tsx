import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartArcs3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartArcs3Icon = React.forwardRef<SVGSVGElement, TablerChartArcs3IconProps>(
	function TablerChartArcs3Icon(props, ref) {
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
				<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M7 12a5 5 0 1 0 5 -5" />
				<path d="M6.29 18.957a9 9 0 1 0 5.71 -15.957" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartArcs3Icon.displayName = "TablerChartArcs3Icon";
}
