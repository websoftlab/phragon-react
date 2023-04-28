import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStackPushIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStackPushIcon = React.forwardRef<SVGSVGElement, TablerStackPushIconProps>(
	function TablerStackPushIcon(props, ref) {
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
				<path d="M6 10l-2 1l8 4l8 -4l-2 -1" />
				<path d="M4 15l8 4l8 -4" />
				<path d="M12 4v7" />
				<path d="M15 8l-3 3l-3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStackPushIcon.displayName = "TablerStackPushIcon";
}
