import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRocketOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRocketOffIcon = React.forwardRef<SVGSVGElement, TablerRocketOffIconProps>(
	function TablerRocketOffIcon(props, ref) {
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
				<path d="M9.29 9.275a9.03 9.03 0 0 0 -.29 .725a6 6 0 0 0 -5 3a8 8 0 0 1 7 7a6 6 0 0 0 3 -5c.241 -.085 .478 -.18 .708 -.283m2.428 -1.61a9 9 0 0 0 2.864 -6.107a3 3 0 0 0 -3 -3a9 9 0 0 0 -6.107 2.864" />
				<path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
				<path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRocketOffIcon.displayName = "TablerRocketOffIcon";
}
