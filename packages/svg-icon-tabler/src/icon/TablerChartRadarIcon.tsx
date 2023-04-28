import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartRadarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartRadarIcon = React.forwardRef<SVGSVGElement, TablerChartRadarIconProps>(
	function TablerChartRadarIcon(props, ref) {
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
				<path d="M12 3l9.5 7l-3.5 11h-12l-3.5 -11z" />
				<path d="M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z" />
				<path d="M2.5 10l9.5 3l9.5 -3" />
				<path d="M12 3v10l6 8" />
				<path d="M6 21l6 -8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartRadarIcon.displayName = "TablerChartRadarIcon";
}
