import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartDots2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartDots2Icon = React.forwardRef<SVGSVGElement, TablerChartDots2IconProps>(
	function TablerChartDots2Icon(props, ref) {
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
				<path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M13 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M21 3l-6 1.5" />
				<path d="M14.113 6.65l2.771 3.695" />
				<path d="M16 12.5l-5 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartDots2Icon.displayName = "TablerChartDots2Icon";
}
