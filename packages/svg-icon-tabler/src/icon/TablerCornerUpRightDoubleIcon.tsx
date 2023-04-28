import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerUpRightDoubleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerUpRightDoubleIcon = React.forwardRef<SVGSVGElement, TablerCornerUpRightDoubleIconProps>(
	function TablerCornerUpRightDoubleIcon(props, ref) {
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
				<path d="M4 18v-6a3 3 0 0 1 3 -3h7" />
				<path d="M10 13l4 -4l-4 -4m5 8l4 -4l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerUpRightDoubleIcon.displayName = "TablerCornerUpRightDoubleIcon";
}
