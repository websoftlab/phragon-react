import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPieChartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPieChartIcon = React.forwardRef<SVGSVGElement, TablerPieChartIconProps>(function TablerPieChartIcon(
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
			<path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
			<path d="M22 12A10 10 0 0 0 12 2v10z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPieChartIcon.displayName = "TablerPieChartIcon";
}
