import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCoffeeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCoffeeIcon = React.forwardRef<SVGSVGElement, TablerCoffeeIconProps>(function TablerCoffeeIcon(
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
			<path d="M17 8h1a4 4 0 1 1 0 8h-1" />
			<path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
			<path d="M6 2 L6 4" />
			<path d="M10 2 L10 4" />
			<path d="M14 2 L14 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCoffeeIcon.displayName = "TablerCoffeeIcon";
}
