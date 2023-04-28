import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUsersMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUsersMinusIcon = React.forwardRef<SVGSVGElement, TablerUsersMinusIconProps>(
	function TablerUsersMinusIcon(props, ref) {
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
				<path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
				<path d="M3 21v-2a4 4 0 0 1 4 -4h4c.948 0 1.818 .33 2.504 .88" />
				<path d="M16 3.13a4 4 0 0 1 0 7.75" />
				<path d="M16 19h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerUsersMinusIcon.displayName = "TablerUsersMinusIcon";
}
