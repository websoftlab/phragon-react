import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrendingUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrendingUpIcon = React.forwardRef<SVGSVGElement, TablerTrendingUpIconProps>(
	function TablerTrendingUpIcon(props, ref) {
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
				<path d="M3 17l6 -6l4 4l8 -8" />
				<path d="M14 7l7 0l0 7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrendingUpIcon.displayName = "TablerTrendingUpIcon";
}
