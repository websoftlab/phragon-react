import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSwitchVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSwitchVerticalIcon = React.forwardRef<SVGSVGElement, TablerSwitchVerticalIconProps>(
	function TablerSwitchVerticalIcon(props, ref) {
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
				<path d="M3 8l4 -4l4 4" />
				<path d="M7 4l0 9" />
				<path d="M13 16l4 4l4 -4" />
				<path d="M17 10l0 10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSwitchVerticalIcon.displayName = "TablerSwitchVerticalIcon";
}
