import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBedOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBedOffIcon = React.forwardRef<SVGSVGElement, TablerBedOffIconProps>(function TablerBedOffIcon(
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
			<path d="M3 7v11" />
			<path d="M3 14h11" />
			<path d="M18 14h3" />
			<path d="M21 18v-8a2 2 0 0 0 -2 -2h-7" />
			<path d="M11 11v3" />
			<path d="M7 10m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBedOffIcon.displayName = "TablerBedOffIcon";
}
