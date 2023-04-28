import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRotateRectangleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRotateRectangleIcon = React.forwardRef<SVGSVGElement, TablerRotateRectangleIconProps>(
	function TablerRotateRectangleIcon(props, ref) {
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
				<path d="M10.09 4.01l.496 -.495a2 2 0 0 1 2.828 0l7.071 7.07a2 2 0 0 1 0 2.83l-7.07 7.07a2 2 0 0 1 -2.83 0l-7.07 -7.07a2 2 0 0 1 0 -2.83l3.535 -3.535h-3.988" />
				<path d="M7.05 11.038v-3.988" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRotateRectangleIcon.displayName = "TablerRotateRectangleIcon";
}
