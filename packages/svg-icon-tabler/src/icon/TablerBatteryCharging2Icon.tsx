import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBatteryCharging2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBatteryCharging2Icon = React.forwardRef<SVGSVGElement, TablerBatteryCharging2IconProps>(
	function TablerBatteryCharging2Icon(props, ref) {
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
				<path d="M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-4.5" />
				<path d="M3 15h6v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-2z" />
				<path d="M6 22v-3" />
				<path d="M4 15v-2.5" />
				<path d="M8 15v-2.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBatteryCharging2Icon.displayName = "TablerBatteryCharging2Icon";
}
