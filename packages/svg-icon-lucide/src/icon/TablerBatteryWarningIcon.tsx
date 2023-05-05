import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBatteryWarningIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBatteryWarningIcon = React.forwardRef<SVGSVGElement, TablerBatteryWarningIconProps>(
	function TablerBatteryWarningIcon(props, ref) {
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
				<path d="M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2" />
				<path d="M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2" />
				<path d="M22 11 L22 13" />
				<path d="M10 7 L10 13" />
				<path d="M10 17 L10 17.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBatteryWarningIcon.displayName = "TablerBatteryWarningIcon";
}
