import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunSnowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunSnowIcon = React.forwardRef<SVGSVGElement, TablerSunSnowIconProps>(function TablerSunSnowIcon(
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
			<path d="M10 9a3 3 0 1 0 0 6" />
			<path d="M2 12h1" />
			<path d="M14 21V3" />
			<path d="M10 4V3" />
			<path d="M10 21v-1" />
			<path d="m3.64 18.36.7-.7" />
			<path d="m4.34 6.34-.7-.7" />
			<path d="M14 12h8" />
			<path d="m17 4-3 3" />
			<path d="m14 17 3 3" />
			<path d="m21 15-3-3 3-3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSunSnowIcon.displayName = "TablerSunSnowIcon";
}
