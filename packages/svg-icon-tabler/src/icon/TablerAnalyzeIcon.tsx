import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAnalyzeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAnalyzeIcon = React.forwardRef<SVGSVGElement, TablerAnalyzeIconProps>(function TablerAnalyzeIcon(
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
			<path d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.095 8.095 0 0 0 -8.019 3.918" />
			<path d="M4 13a8.1 8.1 0 0 0 15 3" />
			<path d="M19 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M5 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAnalyzeIcon.displayName = "TablerAnalyzeIcon";
}
