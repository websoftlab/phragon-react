import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowForwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowForwardIcon = React.forwardRef<SVGSVGElement, TablerArrowForwardIconProps>(
	function TablerArrowForwardIcon(props, ref) {
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
				<path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowForwardIcon.displayName = "TablerArrowForwardIcon";
}
