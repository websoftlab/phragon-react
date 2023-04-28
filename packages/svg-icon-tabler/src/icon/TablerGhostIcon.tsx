import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGhostIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGhostIcon = React.forwardRef<SVGSVGElement, TablerGhostIconProps>(function TablerGhostIcon(
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
			<path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
			<path d="M10 10l.01 0" />
			<path d="M14 10l.01 0" />
			<path d="M10 14a3.5 3.5 0 0 0 4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGhostIcon.displayName = "TablerGhostIcon";
}
