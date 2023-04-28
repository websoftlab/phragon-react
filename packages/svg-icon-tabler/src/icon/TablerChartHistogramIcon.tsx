import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartHistogramIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartHistogramIcon = React.forwardRef<SVGSVGElement, TablerChartHistogramIconProps>(
	function TablerChartHistogramIcon(props, ref) {
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
				<path d="M20 18v3" />
				<path d="M16 16v5" />
				<path d="M12 13v8" />
				<path d="M8 16v5" />
				<path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartHistogramIcon.displayName = "TablerChartHistogramIcon";
}
