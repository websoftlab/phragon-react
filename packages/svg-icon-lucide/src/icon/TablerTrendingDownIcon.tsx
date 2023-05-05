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
				<path d="M22 17 L13.5 8.5 L8.5 13.5 L2 7" />
				<path d="M16 17 L22 17 L22 11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrendingDownIcon.displayName = "TablerTrendingDownIcon";
}
