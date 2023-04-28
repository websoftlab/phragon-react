import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathLowerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathLowerIcon = React.forwardRef<SVGSVGElement, TablerMathLowerIconProps>(
	function TablerMathLowerIcon(props, ref) {
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
				<path d="M19 18l-14 -6l14 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathLowerIcon.displayName = "TablerMathLowerIcon";
}
