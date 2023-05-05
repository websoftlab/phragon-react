import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlarmClockOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlarmClockOffIcon = React.forwardRef<SVGSVGElement, TablerAlarmClockOffIconProps>(
	function TablerAlarmClockOffIcon(props, ref) {
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
				<path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
				<path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
				<path d="m22 6-3-3" />
				<path d="M6.26 18.67 4 21" />
				<path d="m2 2 20 20" />
				<path d="M4 4 2 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlarmClockOffIcon.displayName = "TablerAlarmClockOffIcon";
}
