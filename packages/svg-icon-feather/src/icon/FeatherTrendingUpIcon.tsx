import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherTrendingUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherTrendingUpIcon = React.forwardRef<SVGSVGElement, FeatherTrendingUpIconProps>(
	function FeatherTrendingUpIcon(props, ref) {
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
				<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
				<polyline points="17 6 23 6 23 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherTrendingUpIcon.displayName = "FeatherTrendingUpIcon";
}
