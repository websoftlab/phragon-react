import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrendingUp3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrendingUp3Icon = React.forwardRef<SVGSVGElement, TablerTrendingUp3IconProps>(
	function TablerTrendingUp3Icon(props, ref) {
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
				<path d="M18 5l3 3l-3 3" />
				<path d="M3 18h2.397a5 5 0 0 0 4.096 -2.133l4.014 -5.734a5 5 0 0 1 4.096 -2.133h3.397" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrendingUp3Icon.displayName = "TablerTrendingUp3Icon";
}
