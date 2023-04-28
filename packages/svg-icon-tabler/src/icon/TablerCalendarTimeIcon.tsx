import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCalendarTimeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCalendarTimeIcon = React.forwardRef<SVGSVGElement, TablerCalendarTimeIconProps>(
	function TablerCalendarTimeIcon(props, ref) {
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
				<path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
				<path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M15 3v4" />
				<path d="M7 3v4" />
				<path d="M3 11h16" />
				<path d="M18 16.496v1.504l1 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCalendarTimeIcon.displayName = "TablerCalendarTimeIcon";
}
