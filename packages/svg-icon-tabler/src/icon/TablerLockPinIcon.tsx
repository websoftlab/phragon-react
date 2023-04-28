import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLockPinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLockPinIcon = React.forwardRef<SVGSVGElement, TablerLockPinIconProps>(function TablerLockPinIcon(
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
			<path d="M12.5 21h-5.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10c.24 0 .47 .042 .683 .12" />
			<path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
			<path d="M8 11v-4a4 4 0 1 1 8 0v4" />
			<path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
			<path d="M19 18v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLockPinIcon.displayName = "TablerLockPinIcon";
}
