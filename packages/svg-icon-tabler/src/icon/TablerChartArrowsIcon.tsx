import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartArrowsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartArrowsIcon = React.forwardRef<SVGSVGElement, TablerChartArrowsIconProps>(
	function TablerChartArrowsIcon(props, ref) {
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
				<path d="M3 18l14 0" />
				<path d="M9 9l3 3l-3 3" />
				<path d="M14 15l3 3l-3 3" />
				<path d="M3 3l0 18" />
				<path d="M3 12l9 0" />
				<path d="M18 3l3 3l-3 3" />
				<path d="M3 6l18 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartArrowsIcon.displayName = "TablerChartArrowsIcon";
}
