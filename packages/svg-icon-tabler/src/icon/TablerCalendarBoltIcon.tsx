import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCalendarBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCalendarBoltIcon = React.forwardRef<SVGSVGElement, TablerCalendarBoltIconProps>(
	function TablerCalendarBoltIcon(props, ref) {
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
				<path d="M13.5 21h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
				<path d="M16 3v4" />
				<path d="M8 3v4" />
				<path d="M4 11h16" />
				<path d="M19 16l-2 3h4l-2 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCalendarBoltIcon.displayName = "TablerCalendarBoltIcon";
}
