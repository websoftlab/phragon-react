import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathAvgIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathAvgIcon = React.forwardRef<SVGSVGElement, TablerMathAvgIconProps>(function TablerMathAvgIcon(
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
			<path d="M3 21l18 -18" />
			<path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMathAvgIcon.displayName = "TablerMathAvgIcon";
}
