import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEyeClosedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEyeClosedIcon = React.forwardRef<SVGSVGElement, TablerEyeClosedIconProps>(
	function TablerEyeClosedIcon(props, ref) {
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
				<path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
				<path d="M3 15l2.5 -3.8" />
				<path d="M21 14.976l-2.492 -3.776" />
				<path d="M9 17l.5 -4" />
				<path d="M15 17l-.5 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEyeClosedIcon.displayName = "TablerEyeClosedIcon";
}
