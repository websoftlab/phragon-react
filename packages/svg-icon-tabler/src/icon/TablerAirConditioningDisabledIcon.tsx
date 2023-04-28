import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAirConditioningDisabledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAirConditioningDisabledIcon = React.forwardRef<
	SVGSVGElement,
	TablerAirConditioningDisabledIconProps
>(function TablerAirConditioningDisabledIcon(props, ref) {
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
			<path d="M3 8m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
			<path d="M7 16v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAirConditioningDisabledIcon.displayName = "TablerAirConditioningDisabledIcon";
}
