import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCalendarPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCalendarPlusIcon = React.forwardRef<SVGSVGElement, TablerCalendarPlusIconProps>(
	function TablerCalendarPlusIcon(props, ref) {
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
				<path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
				<path d="M16 2 L16 6" />
				<path d="M8 2 L8 6" />
				<path d="M3 10 L21 10" />
				<path d="M19 16 L19 22" />
				<path d="M16 19 L22 19" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCalendarPlusIcon.displayName = "TablerCalendarPlusIcon";
}
