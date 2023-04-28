import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathIntegralIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathIntegralIcon = React.forwardRef<SVGSVGElement, TablerMathIntegralIconProps>(
	function TablerMathIntegralIcon(props, ref) {
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
				<path d="M7 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathIntegralIcon.displayName = "TablerMathIntegralIcon";
}
