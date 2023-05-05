import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowDown10IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowDown10Icon = React.forwardRef<SVGSVGElement, TablerArrowDown10IconProps>(
	function TablerArrowDown10Icon(props, ref) {
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
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
				<path d="M17 10V4h-2" />
				<path d="M15 10h4" />
				<path d="M17 14 H17 A2 2 0 0 1 19 16 V18 A2 2 0 0 1 17 20 H17 A2 2 0 0 1 15 18 V16 A2 2 0 0 1 17 14 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowDown10Icon.displayName = "TablerArrowDown10Icon";
}
