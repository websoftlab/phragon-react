import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrendingDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrendingDownIcon = React.forwardRef<SVGSVGElement, TablerTrendingDownIconProps>(
	function TablerTrendingDownIcon(props, ref) {
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
				<path d="M3 7l6 6l4 -4l8 8" />
				<path d="M21 10l0 7l-7 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrendingDownIcon.displayName = "TablerTrendingDownIcon";
}
