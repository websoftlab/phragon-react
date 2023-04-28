import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlusMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlusMinusIcon = React.forwardRef<SVGSVGElement, TablerPlusMinusIconProps>(
	function TablerPlusMinusIcon(props, ref) {
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
				<path d="M4 7h6" />
				<path d="M7 4v6" />
				<path d="M20 18h-6" />
				<path d="M5 19l14 -14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlusMinusIcon.displayName = "TablerPlusMinusIcon";
}
