import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathEqualLowerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathEqualLowerIcon = React.forwardRef<SVGSVGElement, TablerMathEqualLowerIconProps>(
	function TablerMathEqualLowerIcon(props, ref) {
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
				<path d="M19 18l-14 -4" />
				<path d="M19 14l-14 -4l14 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathEqualLowerIcon.displayName = "TablerMathEqualLowerIcon";
}
