import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathEqualGreaterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathEqualGreaterIcon = React.forwardRef<SVGSVGElement, TablerMathEqualGreaterIconProps>(
	function TablerMathEqualGreaterIcon(props, ref) {
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
				<path d="M5 18l14 -4" />
				<path d="M5 14l14 -4l-14 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathEqualGreaterIcon.displayName = "TablerMathEqualGreaterIcon";
}
