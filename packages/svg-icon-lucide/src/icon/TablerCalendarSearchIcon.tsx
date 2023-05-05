import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCalendarSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCalendarSearchIcon = React.forwardRef<SVGSVGElement, TablerCalendarSearchIconProps>(
	function TablerCalendarSearchIcon(props, ref) {
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
				<path d="M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5" />
				<path d="M16 2v4" />
				<path d="M8 2v4" />
				<path d="M3 10h18" />
				<path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" />
				<path d="m22 22-1.5-1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCalendarSearchIcon.displayName = "TablerCalendarSearchIcon";
}
