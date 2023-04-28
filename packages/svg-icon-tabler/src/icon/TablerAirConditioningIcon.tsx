import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAirConditioningIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAirConditioningIcon = React.forwardRef<SVGSVGElement, TablerAirConditioningIconProps>(
	function TablerAirConditioningIcon(props, ref) {
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
				<path d="M8 16a3 3 0 0 1 -3 3" />
				<path d="M16 16a3 3 0 0 0 3 3" />
				<path d="M12 16v4" />
				<path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAirConditioningIcon.displayName = "TablerAirConditioningIcon";
}
