import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowCurveRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowCurveRightIcon = React.forwardRef<SVGSVGElement, TablerArrowCurveRightIconProps>(
	function TablerArrowCurveRightIcon(props, ref) {
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
				<path d="M10 7l4 -4l4 4" />
				<path d="M14 3v4.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v2.394" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowCurveRightIcon.displayName = "TablerArrowCurveRightIcon";
}
