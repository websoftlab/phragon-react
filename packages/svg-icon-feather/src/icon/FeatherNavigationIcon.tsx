import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherNavigationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherNavigationIcon = React.forwardRef<SVGSVGElement, FeatherNavigationIconProps>(
	function FeatherNavigationIcon(props, ref) {
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
				<polygon points="3 11 22 2 13 21 11 13 3 11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherNavigationIcon.displayName = "FeatherNavigationIcon";
}
