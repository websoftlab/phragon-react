import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSplineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSplineIcon = React.forwardRef<SVGSVGElement, TablerSplineIconProps>(function TablerSplineIcon(
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
			<path d="M21 5 A2 2 0 0 1 19 7 A2 2 0 0 1 17 5 A2 2 0 0 1 21 5" />
			<path d="M7 19 A2 2 0 0 1 5 21 A2 2 0 0 1 3 19 A2 2 0 0 1 7 19" />
			<path d="M5 17A12 12 0 0 1 17 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSplineIcon.displayName = "TablerSplineIcon";
}
