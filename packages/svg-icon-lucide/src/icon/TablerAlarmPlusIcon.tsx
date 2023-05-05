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
				<path d="M20 13 A8 8 0 0 1 12 21 A8 8 0 0 1 4 13 A8 8 0 0 1 20 13" />
				<path d="M5 3 2 6" />
				<path d="m22 6-3-3" />
				<path d="M6.38 18.7 4 21" />
				<path d="M17.64 18.67 20 21" />
				<path d="M12 10v6" />
				<path d="M9 13h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlarmPlusIcon.displayName = "TablerAlarmPlusIcon";
}
