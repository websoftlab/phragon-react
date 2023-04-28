import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowSharpTurnRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowSharpTurnRightIcon = React.forwardRef<SVGSVGElement, TablerArrowSharpTurnRightIconProps>(
	function TablerArrowSharpTurnRightIcon(props, ref) {
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
				<path d="M7 18v-11.31a.7 .7 0 0 1 1.195 -.495l9.805 9.805" />
				<path d="M13 16h5v-5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowSharpTurnRightIcon.displayName = "TablerArrowSharpTurnRightIcon";
}
