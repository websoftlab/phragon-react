import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBaggageClaimIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBaggageClaimIcon = React.forwardRef<SVGSVGElement, TablerBaggageClaimIconProps>(
	function TablerBaggageClaimIcon(props, ref) {
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
				<path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
				<path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
				<path d="M9 6 H20 A1 1 0 0 1 21 7 V13 A1 1 0 0 1 20 14 H9 A1 1 0 0 1 8 13 V7 A1 1 0 0 1 9 6 z" />
				<path d="M20 20 A2 2 0 0 1 18 22 A2 2 0 0 1 16 20 A2 2 0 0 1 20 20" />
				<path d="M11 20 A2 2 0 0 1 9 22 A2 2 0 0 1 7 20 A2 2 0 0 1 11 20" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBaggageClaimIcon.displayName = "TablerBaggageClaimIcon";
}
