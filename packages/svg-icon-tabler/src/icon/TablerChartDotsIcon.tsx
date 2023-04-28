import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartDotsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartDotsIcon = React.forwardRef<SVGSVGElement, TablerChartDotsIconProps>(
	function TablerChartDotsIcon(props, ref) {
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
				<path d="M9 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M10.16 10.62l2.34 2.88" />
				<path d="M15.088 13.328l2.837 -4.586" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartDotsIcon.displayName = "TablerChartDotsIcon";
}
