import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUsersGroupIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUsersGroupIcon = React.forwardRef<SVGSVGElement, TablerUsersGroupIconProps>(
	function TablerUsersGroupIcon(props, ref) {
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
				<path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
				<path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path d="M17 10h2a2 2 0 0 1 2 2v1" />
				<path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerUsersGroupIcon.displayName = "TablerUsersGroupIcon";
}
