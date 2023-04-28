import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsDoubleNeSwIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsDoubleNeSwIcon = React.forwardRef<SVGSVGElement, TablerArrowsDoubleNeSwIconProps>(
	function TablerArrowsDoubleNeSwIcon(props, ref) {
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
				<path d="M3 14l11 -11" />
				<path d="M10 3h4v4" />
				<path d="M10 17v4h4" />
				<path d="M21 10l-11 11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsDoubleNeSwIcon.displayName = "TablerArrowsDoubleNeSwIcon";
}
