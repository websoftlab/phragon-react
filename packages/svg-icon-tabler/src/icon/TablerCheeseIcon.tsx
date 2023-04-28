import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCheeseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCheeseIcon = React.forwardRef<SVGSVGElement, TablerCheeseIconProps>(function TablerCheeseIcon(
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
			<path d="M4.519 20.008l16.481 -.008v-3.5a2 2 0 1 1 0 -4v-3.5h-16.722" />
			<path d="M21 9l-9.385 -4.992c-2.512 .12 -4.758 1.42 -6.327 3.425c-1.423 1.82 -2.288 4.221 -2.288 6.854c0 2.117 .56 4.085 1.519 5.721" />
			<path d="M15 13v.01" />
			<path d="M8 13v.01" />
			<path d="M11 16v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCheeseIcon.displayName = "TablerCheeseIcon";
}
