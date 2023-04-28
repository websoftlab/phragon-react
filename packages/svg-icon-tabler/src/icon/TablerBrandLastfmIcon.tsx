import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandLastfmIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandLastfmIcon = React.forwardRef<SVGSVGElement, TablerBrandLastfmIconProps>(
	function TablerBrandLastfmIcon(props, ref) {
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
				<path d="M20 8c-.83 -1 -1.388 -1 -2 -1c-.612 0 -2 .271 -2 2s1.384 2.233 3 3c1.616 .767 2.125 1.812 2 3s-1 2 -3 2s-3 -1 -3.5 -2s-1.585 -4.78 -2.497 -6a5 5 0 1 0 -1 7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandLastfmIcon.displayName = "TablerBrandLastfmIcon";
}
