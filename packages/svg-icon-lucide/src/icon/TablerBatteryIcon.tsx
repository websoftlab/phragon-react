import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBatteryIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBatteryIcon = React.forwardRef<SVGSVGElement, TablerBatteryIconProps>(function TablerBatteryIcon(
	props,
	ref
) {
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
			<path d="M4 7 H16 A2 2 0 0 1 18 9 V15 A2 2 0 0 1 16 17 H4 A2 2 0 0 1 2 15 V9 A2 2 0 0 1 4 7 z" />
			<path d="M22 11 L22 13" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBatteryIcon.displayName = "TablerBatteryIcon";
}
