import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartSankeyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartSankeyIcon = React.forwardRef<SVGSVGElement, TablerChartSankeyIconProps>(
	function TablerChartSankeyIcon(props, ref) {
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
				<path d="M3 3v18h18" />
				<path d="M3 6h18" />
				<path d="M3 8c10 0 8 9 18 9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartSankeyIcon.displayName = "TablerChartSankeyIcon";
}
