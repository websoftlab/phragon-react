import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDoorEnterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDoorEnterIcon = React.forwardRef<SVGSVGElement, TablerDoorEnterIconProps>(
	function TablerDoorEnterIcon(props, ref) {
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
				<path d="M13 12v.01" />
				<path d="M3 21h18" />
				<path d="M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5" />
				<path d="M21 7h-7m3 -3l-3 3l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDoorEnterIcon.displayName = "TablerDoorEnterIcon";
}
