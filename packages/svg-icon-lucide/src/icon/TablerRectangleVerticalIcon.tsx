import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRectangleVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRectangleVerticalIcon = React.forwardRef<SVGSVGElement, TablerRectangleVerticalIconProps>(
	function TablerRectangleVerticalIcon(props, ref) {
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
				<path d="M8 2 H16 A2 2 0 0 1 18 4 V20 A2 2 0 0 1 16 22 H8 A2 2 0 0 1 6 20 V4 A2 2 0 0 1 8 2 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRectangleVerticalIcon.displayName = "TablerRectangleVerticalIcon";
}
