import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartBubbleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartBubbleIcon = React.forwardRef<SVGSVGElement, TablerChartBubbleIconProps>(
	function TablerChartBubbleIcon(props, ref) {
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
				<path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartBubbleIcon.displayName = "TablerChartBubbleIcon";
}
