import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartPpfIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartPpfIcon = React.forwardRef<SVGSVGElement, TablerChartPpfIconProps>(function TablerChartPpfIcon(
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
			<path d="M19 17c0 -6.075 -5.373 -11 -12 -11" />
			<path d="M3 3v18h18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerChartPpfIcon.displayName = "TablerChartPpfIcon";
}
