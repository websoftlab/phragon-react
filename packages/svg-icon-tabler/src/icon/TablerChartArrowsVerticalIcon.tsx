import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartArrowsVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartArrowsVerticalIcon = React.forwardRef<SVGSVGElement, TablerChartArrowsVerticalIconProps>(
	function TablerChartArrowsVerticalIcon(props, ref) {
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
				<path d="M18 21v-14" />
				<path d="M9 15l3 -3l3 3" />
				<path d="M15 10l3 -3l3 3" />
				<path d="M3 21l18 0" />
				<path d="M12 21l0 -9" />
				<path d="M3 6l3 -3l3 3" />
				<path d="M6 21v-18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartArrowsVerticalIcon.displayName = "TablerChartArrowsVerticalIcon";
}
