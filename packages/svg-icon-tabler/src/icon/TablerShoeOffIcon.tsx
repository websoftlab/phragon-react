import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShoeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShoeOffIcon = React.forwardRef<SVGSVGElement, TablerShoeOffIconProps>(function TablerShoeOffIcon(
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
			<path d="M13.846 9.868l4.08 .972a4 4 0 0 1 3.074 3.89v2.27m-3 1h-14a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h2" />
			<path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
			<path d="M10 12l.663 -1.327" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShoeOffIcon.displayName = "TablerShoeOffIcon";
}
