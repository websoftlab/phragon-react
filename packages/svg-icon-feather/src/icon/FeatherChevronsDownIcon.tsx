import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherChevronsDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherChevronsDownIcon = React.forwardRef<SVGSVGElement, FeatherChevronsDownIconProps>(
	function FeatherChevronsDownIcon(props, ref) {
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
				<polyline points="7 13 12 18 17 13" />
				<polyline points="7 6 12 11 17 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherChevronsDownIcon.displayName = "FeatherChevronsDownIcon";
}
