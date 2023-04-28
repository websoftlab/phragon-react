import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandLaravelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandLaravelIcon = React.forwardRef<SVGSVGElement, TablerBrandLaravelIconProps>(
	function TablerBrandLaravelIcon(props, ref) {
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
				<path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" />
				<path d="M11 18v4" />
				<path d="M7 15.5l7 -4" />
				<path d="M14 7.5v4" />
				<path d="M14 11.5l4 2.5" />
				<path d="M11 13v-7.5l-4 -2.5l-4 2.5" />
				<path d="M7 8l4 -2.5" />
				<path d="M18 10l4 -2.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandLaravelIcon.displayName = "TablerBrandLaravelIcon";
}
