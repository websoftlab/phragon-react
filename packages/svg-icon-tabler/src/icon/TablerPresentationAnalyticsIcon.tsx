import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPresentationAnalyticsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPresentationAnalyticsIcon = React.forwardRef<SVGSVGElement, TablerPresentationAnalyticsIconProps>(
	function TablerPresentationAnalyticsIcon(props, ref) {
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
				<path d="M9 12v-4" />
				<path d="M15 12v-2" />
				<path d="M12 12v-1" />
				<path d="M3 4h18" />
				<path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
				<path d="M12 16v4" />
				<path d="M9 20h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPresentationAnalyticsIcon.displayName = "TablerPresentationAnalyticsIcon";
}
