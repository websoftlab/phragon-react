import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayFootballIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayFootballIcon = React.forwardRef<SVGSVGElement, TablerPlayFootballIconProps>(
	function TablerPlayFootballIcon(props, ref) {
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
				<path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M3 17l5 1l.75 -1.5" />
				<path d="M14 21v-4l-4 -3l1 -6" />
				<path d="M6 12v-3l5 -1l3 3l3 1" />
				<path d="M19.5 20a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlayFootballIcon.displayName = "TablerPlayFootballIcon";
}
