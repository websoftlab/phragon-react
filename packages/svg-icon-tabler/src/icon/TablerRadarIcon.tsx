import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRadarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRadarIcon = React.forwardRef<SVGSVGElement, TablerRadarIconProps>(function TablerRadarIcon(
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
			<path d="M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9" />
			<path d="M16 9a5 5 0 1 0 -7 7" />
			<path d="M20.486 9a9 9 0 1 0 -11.482 11.495" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRadarIcon.displayName = "TablerRadarIcon";
}
