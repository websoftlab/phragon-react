import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartCandleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartCandleIcon = React.forwardRef<SVGSVGElement, TablerChartCandleIconProps>(
	function TablerChartCandleIcon(props, ref) {
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
				<path d="M4 6m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M6 4l0 2" />
				<path d="M6 11l0 9" />
				<path d="M10 14m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M12 4l0 10" />
				<path d="M12 19l0 1" />
				<path d="M16 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M18 4l0 1" />
				<path d="M18 11l0 9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartCandleIcon.displayName = "TablerChartCandleIcon";
}
