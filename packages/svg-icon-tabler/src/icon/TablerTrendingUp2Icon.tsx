import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrendingUp2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrendingUp2Icon = React.forwardRef<SVGSVGElement, TablerTrendingUp2IconProps>(
	function TablerTrendingUp2Icon(props, ref) {
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
				<path d="M3 18h5l7 -10h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrendingUp2Icon.displayName = "TablerTrendingUp2Icon";
}
