import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTriangleInvertedFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTriangleInvertedFilledIcon = React.forwardRef<SVGSVGElement, TablerTriangleInvertedFilledIconProps>(
	function TablerTriangleInvertedFilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M19.007 3a3 3 0 0 1 2.828 3.94l-.068 .185l-.062 .126l-7.09 12.233a3 3 0 0 1 -5.137 .19l-.103 -.173l-7.1 -12.25l-.061 -.125a3 3 0 0 1 2.625 -4.125l.058 -.001l.06 .002l.043 -.002h14.007z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTriangleInvertedFilledIcon.displayName = "TablerTriangleInvertedFilledIcon";
}
