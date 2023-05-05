import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPenToolIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPenToolIcon = React.forwardRef<SVGSVGElement, TablerPenToolIconProps>(function TablerPenToolIcon(
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
			<path d="m12 19 7-7 3 3-7 7-3-3z" />
			<path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
			<path d="m2 2 7.586 7.586" />
			<path d="M13 11 A2 2 0 0 1 11 13 A2 2 0 0 1 9 11 A2 2 0 0 1 13 11" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPenToolIcon.displayName = "TablerPenToolIcon";
}
