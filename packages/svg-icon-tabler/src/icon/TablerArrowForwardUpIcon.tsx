import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowForwardUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowForwardUpIcon = React.forwardRef<SVGSVGElement, TablerArrowForwardUpIconProps>(
	function TablerArrowForwardUpIcon(props, ref) {
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
				<path d="M15 14l4 -4l-4 -4" />
				<path d="M19 10h-11a4 4 0 1 0 0 8h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowForwardUpIcon.displayName = "TablerArrowForwardUpIcon";
}
