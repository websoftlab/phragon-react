import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIdBadgeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIdBadgeOffIcon = React.forwardRef<SVGSVGElement, TablerIdBadgeOffIconProps>(
	function TablerIdBadgeOffIcon(props, ref) {
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
				<path d="M7.141 3.125a3 3 0 0 1 .859 -.125h8a3 3 0 0 1 3 3v9m-.13 3.874a3 3 0 0 1 -2.87 2.126h-8a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 .128 -.869" />
				<path d="M11.179 11.176a2 2 0 1 0 2.635 2.667" />
				<path d="M10 6h4" />
				<path d="M9 18h6" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIdBadgeOffIcon.displayName = "TablerIdBadgeOffIcon";
}
