import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPizzaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPizzaIcon = React.forwardRef<SVGSVGElement, TablerPizzaIconProps>(function TablerPizzaIcon(
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
			<path d="M15 11h.01" />
			<path d="M11 15h.01" />
			<path d="M16 16h.01" />
			<path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
			<path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPizzaIcon.displayName = "TablerPizzaIcon";
}
