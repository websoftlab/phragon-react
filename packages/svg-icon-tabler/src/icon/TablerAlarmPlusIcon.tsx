import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlarmPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlarmPlusIcon = React.forwardRef<SVGSVGElement, TablerAlarmPlusIconProps>(
	function TablerAlarmPlusIcon(props, ref) {
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
				<path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M7 4l-2.75 2" />
				<path d="M17 4l2.75 2" />
				<path d="M10 13h4" />
				<path d="M12 11v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlarmPlusIcon.displayName = "TablerAlarmPlusIcon";
}
