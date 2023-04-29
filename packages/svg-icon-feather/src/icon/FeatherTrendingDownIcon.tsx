import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherTrendingDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherTrendingDownIcon = React.forwardRef<SVGSVGElement, FeatherTrendingDownIconProps>(
	function FeatherTrendingDownIcon(props, ref) {
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
				<polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
				<polyline points="17 18 23 18 23 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherTrendingDownIcon.displayName = "FeatherTrendingDownIcon";
}
