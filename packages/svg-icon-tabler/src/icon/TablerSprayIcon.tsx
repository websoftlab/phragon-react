import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSprayIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSprayIcon = React.forwardRef<SVGSVGElement, TablerSprayIconProps>(function TablerSprayIcon(
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
			<path d="M4 10m0 2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z" />
			<path d="M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4" />
			<path d="M15 7h.01" />
			<path d="M18 9h.01" />
			<path d="M18 5h.01" />
			<path d="M21 3h.01" />
			<path d="M21 7h.01" />
			<path d="M21 11h.01" />
			<path d="M10 7h1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSprayIcon.displayName = "TablerSprayIcon";
}
