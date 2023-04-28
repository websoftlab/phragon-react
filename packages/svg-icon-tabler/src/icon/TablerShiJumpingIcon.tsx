import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShiJumpingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShiJumpingIcon = React.forwardRef<SVGSVGElement, TablerShiJumpingIconProps>(
	function TablerShiJumpingIcon(props, ref) {
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
				<path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M17 17.5l-5 -4.5v-6l5 4" />
				<path d="M7 17.5l5 -4.5" />
				<path d="M15.103 21.58l6.762 -14.502a2 2 0 0 0 -.968 -2.657" />
				<path d="M8.897 21.58l-6.762 -14.503a2 2 0 0 1 .968 -2.657" />
				<path d="M7 11l5 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShiJumpingIcon.displayName = "TablerShiJumpingIcon";
}
