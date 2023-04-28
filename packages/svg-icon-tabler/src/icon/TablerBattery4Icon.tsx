import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBattery4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBattery4Icon = React.forwardRef<SVGSVGElement, TablerBattery4IconProps>(function TablerBattery4Icon(
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
			<path d="M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
			<path d="M7 10l0 4" />
			<path d="M10 10l0 4" />
			<path d="M13 10l0 4" />
			<path d="M16 10l0 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBattery4Icon.displayName = "TablerBattery4Icon";
}
