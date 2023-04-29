import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherChevronsRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherChevronsRightIcon = React.forwardRef<SVGSVGElement, FeatherChevronsRightIconProps>(
	function FeatherChevronsRightIcon(props, ref) {
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
				<polyline points="13 17 18 12 13 7" />
				<polyline points="6 17 11 12 6 7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherChevronsRightIcon.displayName = "FeatherChevronsRightIcon";
}
