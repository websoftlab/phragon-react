import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunMoonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunMoonIcon = React.forwardRef<SVGSVGElement, TablerSunMoonIconProps>(function TablerSunMoonIcon(
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
			<path d="M9.173 14.83a4 4 0 1 1 5.657 -5.657" />
			<path d="M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914" />
			<path d="M3 12h1" />
			<path d="M12 3v1" />
			<path d="M5.6 5.6l.7 .7" />
			<path d="M3 21l18 -18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSunMoonIcon.displayName = "TablerSunMoonIcon";
}
