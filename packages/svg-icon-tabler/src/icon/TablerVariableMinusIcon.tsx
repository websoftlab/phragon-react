import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVariableMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVariableMinusIcon = React.forwardRef<SVGSVGElement, TablerVariableMinusIconProps>(
	function TablerVariableMinusIcon(props, ref) {
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
				<path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
				<path d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.775 3.55 2.29 7.102 1.544 11.01m-11.544 -6.01h1c1 0 1 1 2.016 3.527c.782 1.966 .943 3 1.478 3.343" />
				<path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
				<path d="M16 19h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVariableMinusIcon.displayName = "TablerVariableMinusIcon";
}
