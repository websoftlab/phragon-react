import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerRightDownDoubleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerRightDownDoubleIcon = React.forwardRef<SVGSVGElement, TablerCornerRightDownDoubleIconProps>(
	function TablerCornerRightDownDoubleIcon(props, ref) {
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
				<path d="M5 4h6a3 3 0 0 1 3 3v7" />
				<path d="M10 10l4 4l4 -4m-8 5l4 4l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerRightDownDoubleIcon.displayName = "TablerCornerRightDownDoubleIcon";
}
