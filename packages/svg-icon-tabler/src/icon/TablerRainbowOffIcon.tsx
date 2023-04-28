import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRainbowOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRainbowOffIcon = React.forwardRef<SVGSVGElement, TablerRainbowOffIconProps>(
	function TablerRainbowOffIcon(props, ref) {
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
				<path d="M22 17c0 -5.523 -4.477 -10 -10 -10c-.308 0 -.613 .014 -.914 .041m-3.208 .845a10 10 0 0 0 -5.878 9.114" />
				<path d="M11.088 11.069a6 6 0 0 0 -5.088 5.931" />
				<path d="M14 17a2 2 0 1 0 -4 0" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRainbowOffIcon.displayName = "TablerRainbowOffIcon";
}
