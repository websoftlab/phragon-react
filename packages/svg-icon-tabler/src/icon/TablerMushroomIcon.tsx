import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMushroomIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMushroomIcon = React.forwardRef<SVGSVGElement, TablerMushroomIconProps>(function TablerMushroomIcon(
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
			<path d="M20 11.1c0 -4.474 -3.582 -8.1 -8 -8.1s-8 3.626 -8 8.1a.9 .9 0 0 0 .9 .9h14.2a.9 .9 0 0 0 .9 -.9z" />
			<path d="M10 12v7a2 2 0 1 0 4 0v-7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMushroomIcon.displayName = "TablerMushroomIcon";
}
