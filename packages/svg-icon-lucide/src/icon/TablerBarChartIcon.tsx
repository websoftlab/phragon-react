import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBarChartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBarChartIcon = React.forwardRef<SVGSVGElement, TablerBarChartIconProps>(function TablerBarChartIcon(
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
			<path d="M12 20 L12 10" />
			<path d="M18 20 L18 4" />
			<path d="M6 20 L6 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBarChartIcon.displayName = "TablerBarChartIcon";
}
