import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCalendarOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCalendarOffIcon = React.forwardRef<SVGSVGElement, TablerCalendarOffIconProps>(
	function TablerCalendarOffIcon(props, ref) {
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
				<path d="M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" />
				<path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" />
				<path d="M16 2v4" />
				<path d="M3 10h7" />
				<path d="M21 10h-5.5" />
				<path d="M2 2 L22 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCalendarOffIcon.displayName = "TablerCalendarOffIcon";
}
