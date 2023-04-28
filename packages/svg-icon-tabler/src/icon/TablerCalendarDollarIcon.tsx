import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCalendarDollarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCalendarDollarIcon = React.forwardRef<SVGSVGElement, TablerCalendarDollarIconProps>(
	function TablerCalendarDollarIcon(props, ref) {
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
				<path d="M13 21h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
				<path d="M16 3v4" />
				<path d="M8 3v4" />
				<path d="M4 11h12.5" />
				<path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
				<path d="M19 21v1m0 -8v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCalendarDollarIcon.displayName = "TablerCalendarDollarIcon";
}
