import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherChevronsUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherChevronsUpIcon = React.forwardRef<SVGSVGElement, FeatherChevronsUpIconProps>(
	function FeatherChevronsUpIcon(props, ref) {
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
				<polyline points="17 11 12 6 7 11" />
				<polyline points="17 18 12 13 7 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherChevronsUpIcon.displayName = "FeatherChevronsUpIcon";
}
