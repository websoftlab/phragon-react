import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCalendarXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCalendarXIcon = React.forwardRef<SVGSVGElement, TablerCalendarXIconProps>(
	function TablerCalendarXIcon(props, ref) {
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
				<path d="M5 4 H19 A2 2 0 0 1 21 6 V20 A2 2 0 0 1 19 22 H5 A2 2 0 0 1 3 20 V6 A2 2 0 0 1 5 4 z" />
				<path d="M16 2 L16 6" />
				<path d="M8 2 L8 6" />
				<path d="M3 10 L21 10" />
				<path d="M10 14 L14 18" />
				<path d="M14 14 L10 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCalendarXIcon.displayName = "TablerCalendarXIcon";
}
