import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCalendarEventIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCalendarEventIcon = React.forwardRef<SVGSVGElement, TablerCalendarEventIconProps>(
	function TablerCalendarEventIcon(props, ref) {
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
				<path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
				<path d="M16 3l0 4" />
				<path d="M8 3l0 4" />
				<path d="M4 11l16 0" />
				<path d="M8 15h2v2h-2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCalendarEventIcon.displayName = "TablerCalendarEventIcon";
}
