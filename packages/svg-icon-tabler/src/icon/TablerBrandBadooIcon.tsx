import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandBadooIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandBadooIcon = React.forwardRef<SVGSVGElement, TablerBrandBadooIconProps>(
	function TablerBrandBadooIcon(props, ref) {
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
				<path d="M22 9.43c0 5.838 -4.477 10.57 -10 10.57s-10 -4.662 -10 -10.5c0 -2.667 1.83 -5.01 4.322 -5.429c2.492 -.418 4.9 1.392 5.678 3.929c.768 -2.54 3.177 -4.354 5.668 -3.931c2.495 .417 4.332 2.69 4.332 5.36z" />
				<path d="M7.5 10c0 2.761 2.015 5 4.5 5s4.5 -2.239 4.5 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandBadooIcon.displayName = "TablerBrandBadooIcon";
}
