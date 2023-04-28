import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartPie4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartPie4Icon = React.forwardRef<SVGSVGElement, TablerChartPie4IconProps>(
	function TablerChartPie4Icon(props, ref) {
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
				<path d="M12 12l-6.5 5.5" />
				<path d="M12 3v9h9" />
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M12 12l5 7.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartPie4Icon.displayName = "TablerChartPie4Icon";
}
