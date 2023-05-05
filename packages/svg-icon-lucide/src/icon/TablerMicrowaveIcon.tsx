import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMicrowaveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMicrowaveIcon = React.forwardRef<SVGSVGElement, TablerMicrowaveIconProps>(
	function TablerMicrowaveIcon(props, ref) {
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
				<path d="M4 4 H20 A2 2 0 0 1 22 6 V17 A2 2 0 0 1 20 19 H4 A2 2 0 0 1 2 17 V6 A2 2 0 0 1 4 4 z" />
				<path d="M7 8 H13 A1 1 0 0 1 14 9 V14 A1 1 0 0 1 13 15 H7 A1 1 0 0 1 6 14 V9 A1 1 0 0 1 7 8 z" />
				<path d="M18 8v7" />
				<path d="M6 19v2" />
				<path d="M18 19v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMicrowaveIcon.displayName = "TablerMicrowaveIcon";
}
