import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandPaypayIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandPaypayIcon = React.forwardRef<SVGSVGElement, TablerBrandPaypayIconProps>(
	function TablerBrandPaypayIcon(props, ref) {
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
				<path d="M6.375 21l3.938 -13.838" />
				<path d="M3 6c16.731 0 21.231 9.881 4.5 11" />
				<path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandPaypayIcon.displayName = "TablerBrandPaypayIcon";
}
