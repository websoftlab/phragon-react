import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerReportAnalyticsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerReportAnalyticsIcon = React.forwardRef<SVGSVGElement, TablerReportAnalyticsIconProps>(
	function TablerReportAnalyticsIcon(props, ref) {
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
				<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
				<path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
				<path d="M9 17v-5" />
				<path d="M12 17v-1" />
				<path d="M15 17v-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerReportAnalyticsIcon.displayName = "TablerReportAnalyticsIcon";
}
