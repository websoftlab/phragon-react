import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChefHatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChefHatIcon = React.forwardRef<SVGSVGElement, TablerChefHatIconProps>(function TablerChefHatIcon(
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
			<path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
			<path d="M6 17 L18 17" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerChefHatIcon.displayName = "TablerChefHatIcon";
}
