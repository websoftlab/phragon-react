import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartDots3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartDots3Icon = React.forwardRef<SVGSVGElement, TablerChartDots3IconProps>(
	function TablerChartDots3Icon(props, ref) {
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
				<path d="M5 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M16 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M6 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M9 17l5 -1.5" />
				<path d="M6.5 8.5l7.81 5.37" />
				<path d="M7 7l8 -1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartDots3Icon.displayName = "TablerChartDots3Icon";
}
