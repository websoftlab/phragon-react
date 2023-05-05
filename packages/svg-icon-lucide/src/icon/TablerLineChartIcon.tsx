import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLineChartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLineChartIcon = React.forwardRef<SVGSVGElement, TablerLineChartIconProps>(
	function TablerLineChartIcon(props, ref) {
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
				<path d="m19 9-5 5-4-4-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLineChartIcon.displayName = "TablerLineChartIcon";
}
