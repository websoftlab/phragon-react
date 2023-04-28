import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandBinanceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandBinanceIcon = React.forwardRef<SVGSVGElement, TablerBrandBinanceIconProps>(
	function TablerBrandBinanceIcon(props, ref) {
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
				<path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6z" />
				<path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5z" />
				<path d="M20 10l2 2l-2 2l-2 -2z" />
				<path d="M4 10l2 2l-2 2l-2 -2z" />
				<path d="M12 10l2 2l-2 2l-2 -2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandBinanceIcon.displayName = "TablerBrandBinanceIcon";
}
