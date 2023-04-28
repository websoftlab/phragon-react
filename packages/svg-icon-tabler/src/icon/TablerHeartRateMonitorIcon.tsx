import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeartRateMonitorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeartRateMonitorIcon = React.forwardRef<SVGSVGElement, TablerHeartRateMonitorIconProps>(
	function TablerHeartRateMonitorIcon(props, ref) {
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
				<path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
				<path d="M7 20h10" />
				<path d="M9 16v4" />
				<path d="M15 16v4" />
				<path d="M7 10h2l2 3l2 -6l1 3h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHeartRateMonitorIcon.displayName = "TablerHeartRateMonitorIcon";
}
