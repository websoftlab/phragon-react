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
				<path d="M22 7 L13.5 15.5 L8.5 10.5 L2 17" />
				<path d="M16 7 L22 7 L22 13" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrendingUpIcon.displayName = "TablerTrendingUpIcon";
}
