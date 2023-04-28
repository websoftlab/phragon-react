import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathGreaterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathGreaterIcon = React.forwardRef<SVGSVGElement, TablerMathGreaterIconProps>(
	function TablerMathGreaterIcon(props, ref) {
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
				<path d="M5 18l14 -6l-14 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathGreaterIcon.displayName = "TablerMathGreaterIcon";
}
