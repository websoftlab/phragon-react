import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVariableIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVariableIcon = React.forwardRef<SVGSVGElement, TablerVariableIconProps>(function TablerVariableIcon(
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
			<path d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c2.5 5 2.5 10 0 16m-10 -11h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" />
			<path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVariableIcon.displayName = "TablerVariableIcon";
}
