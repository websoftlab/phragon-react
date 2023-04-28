import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowForwardUpDoubleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowForwardUpDoubleIcon = React.forwardRef<SVGSVGElement, TablerArrowForwardUpDoubleIconProps>(
	function TablerArrowForwardUpDoubleIcon(props, ref) {
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
				<path d="M11 14l4 -4l-4 -4" />
				<path d="M16 14l4 -4l-4 -4" />
				<path d="M15 10h-7a4 4 0 1 0 0 8h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowForwardUpDoubleIcon.displayName = "TablerArrowForwardUpDoubleIcon";
}
