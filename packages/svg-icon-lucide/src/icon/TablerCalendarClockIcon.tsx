import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCalendarClockIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCalendarClockIcon = React.forwardRef<SVGSVGElement, TablerCalendarClockIconProps>(
	function TablerCalendarClockIcon(props, ref) {
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
				<path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
				<path d="M16 2v4" />
				<path d="M8 2v4" />
				<path d="M3 10h5" />
				<path d="M17.5 17.5 16 16.25V14" />
				<path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCalendarClockIcon.displayName = "TablerCalendarClockIcon";
}
