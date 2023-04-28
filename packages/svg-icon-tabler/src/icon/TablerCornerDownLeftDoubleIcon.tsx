import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerDownLeftDoubleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerDownLeftDoubleIcon = React.forwardRef<SVGSVGElement, TablerCornerDownLeftDoubleIconProps>(
	function TablerCornerDownLeftDoubleIcon(props, ref) {
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
				<path d="M19 5v6a3 3 0 0 1 -3 3h-7" />
				<path d="M13 10l-4 4l4 4m-5 -8l-4 4l4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerDownLeftDoubleIcon.displayName = "TablerCornerDownLeftDoubleIcon";
}
