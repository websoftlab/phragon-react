import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSwitch3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSwitch3Icon = React.forwardRef<SVGSVGElement, TablerSwitch3IconProps>(function TablerSwitch3Icon(
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
			<path d="M3 17h2.397a5 5 0 0 0 4.096 -2.133l.177 -.253m3.66 -5.227l.177 -.254a5 5 0 0 1 4.096 -2.133h3.397" />
			<path d="M18 4l3 3l-3 3" />
			<path d="M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397" />
			<path d="M18 20l3 -3l-3 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSwitch3Icon.displayName = "TablerSwitch3Icon";
}
