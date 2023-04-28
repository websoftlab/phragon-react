import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAdOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAdOffIcon = React.forwardRef<SVGSVGElement, TablerAdOffIconProps>(function TablerAdOffIcon(
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
			<path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
			<path d="M7 15v-4a2 2 0 0 1 2 -2m2 2v4" />
			<path d="M7 13h4" />
			<path d="M17 9v4" />
			<path d="M16.115 12.131c.33 .149 .595 .412 .747 .74" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAdOffIcon.displayName = "TablerAdOffIcon";
}
