import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerLeftDownDoubleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerLeftDownDoubleIcon = React.forwardRef<SVGSVGElement, TablerCornerLeftDownDoubleIconProps>(
	function TablerCornerLeftDownDoubleIcon(props, ref) {
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
				<path d="M18 4h-6a3 3 0 0 0 -3 3v7" />
				<path d="M13 10l-4 4l-4 -4m8 5l-4 4l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerLeftDownDoubleIcon.displayName = "TablerCornerLeftDownDoubleIcon";
}
