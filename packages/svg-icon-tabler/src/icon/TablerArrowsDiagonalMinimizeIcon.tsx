import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsDiagonalMinimizeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsDiagonalMinimizeIcon = React.forwardRef<SVGSVGElement, TablerArrowsDiagonalMinimizeIconProps>(
	function TablerArrowsDiagonalMinimizeIcon(props, ref) {
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
				<path d="M6 10h4v-4" />
				<path d="M4 4l6 6" />
				<path d="M18 14h-4v4" />
				<path d="M14 14l6 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsDiagonalMinimizeIcon.displayName = "TablerArrowsDiagonalMinimizeIcon";
}
