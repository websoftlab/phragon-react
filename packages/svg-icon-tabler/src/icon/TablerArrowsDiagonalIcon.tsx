import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsDiagonalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsDiagonalIcon = React.forwardRef<SVGSVGElement, TablerArrowsDiagonalIconProps>(
	function TablerArrowsDiagonalIcon(props, ref) {
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
				<path d="M16 4l4 0l0 4" />
				<path d="M14 10l6 -6" />
				<path d="M8 20l-4 0l0 -4" />
				<path d="M4 20l6 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsDiagonalIcon.displayName = "TablerArrowsDiagonalIcon";
}
