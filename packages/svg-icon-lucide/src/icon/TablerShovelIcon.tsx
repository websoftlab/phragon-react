import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShovelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShovelIcon = React.forwardRef<SVGSVGElement, TablerShovelIconProps>(function TablerShovelIcon(
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
			<path d="M2 22v-5l5-5 5 5-5 5z" />
			<path d="M9.5 14.5 16 8" />
			<path d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShovelIcon.displayName = "TablerShovelIcon";
}
