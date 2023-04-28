import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeOffIcon = React.forwardRef<SVGSVGElement, TablerHomeOffIconProps>(function TablerHomeOffIcon(
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
			<path d="M5 12h-2l4.497 -4.497m2 -2l2.504 -2.504l9 9h-2" />
			<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-3" />
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2m2 2v6" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHomeOffIcon.displayName = "TablerHomeOffIcon";
}
