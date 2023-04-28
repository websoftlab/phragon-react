import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartAreaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartAreaIcon = React.forwardRef<SVGSVGElement, TablerChartAreaIconProps>(
	function TablerChartAreaIcon(props, ref) {
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
				<path d="M4 19l16 0" />
				<path d="M4 15l4 -6l4 2l4 -5l4 4l0 5l-16 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartAreaIcon.displayName = "TablerChartAreaIcon";
}
