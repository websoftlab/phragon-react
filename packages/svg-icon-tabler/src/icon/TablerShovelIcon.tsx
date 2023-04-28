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
			<path d="M17 4l3 3" />
			<path d="M18.5 5.5l-8 8" />
			<path d="M8.276 11.284l4.44 4.44a.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a.968 .968 0 0 1 1.37 0z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShovelIcon.displayName = "TablerShovelIcon";
}
