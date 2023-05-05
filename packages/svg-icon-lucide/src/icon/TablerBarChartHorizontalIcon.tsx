import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBarChartHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBarChartHorizontalIcon = React.forwardRef<SVGSVGElement, TablerBarChartHorizontalIconProps>(
	function TablerBarChartHorizontalIcon(props, ref) {
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
				<path d="M7 16h8" />
				<path d="M7 11h12" />
				<path d="M7 6h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBarChartHorizontalIcon.displayName = "TablerBarChartHorizontalIcon";
}
