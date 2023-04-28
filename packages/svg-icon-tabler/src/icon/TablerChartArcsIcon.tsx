import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartArcsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartArcsIcon = React.forwardRef<SVGSVGElement, TablerChartArcsIconProps>(
	function TablerChartArcsIcon(props, ref) {
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
				<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792" />
				<path d="M3 12a9 9 0 1 0 9 -9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartArcsIcon.displayName = "TablerChartArcsIcon";
}
