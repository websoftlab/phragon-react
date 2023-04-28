import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTentOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTentOffIcon = React.forwardRef<SVGSVGElement, TablerTentOffIconProps>(function TablerTentOffIcon(
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
			<path d="M11 14l4 6h5m-2.863 -6.868l-5.137 -9.132l-1.44 2.559m-1.44 2.563l-6.12 10.878h6l4 -6" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTentOffIcon.displayName = "TablerTentOffIcon";
}
