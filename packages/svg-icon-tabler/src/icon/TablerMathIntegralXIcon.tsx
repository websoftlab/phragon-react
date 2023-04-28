import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathIntegralXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathIntegralXIcon = React.forwardRef<SVGSVGElement, TablerMathIntegralXIconProps>(
	function TablerMathIntegralXIcon(props, ref) {
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
				<path d="M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" />
				<path d="M14 12l6 6" />
				<path d="M14 18l6 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathIntegralXIcon.displayName = "TablerMathIntegralXIcon";
}
