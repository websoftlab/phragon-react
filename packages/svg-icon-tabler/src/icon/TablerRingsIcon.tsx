import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRingsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRingsIcon = React.forwardRef<SVGSVGElement, TablerRingsIconProps>(function TablerRingsIcon(
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
			<path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M7 15v-11" />
			<path d="M17 15v-11" />
			<path d="M3 4h18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRingsIcon.displayName = "TablerRingsIcon";
}
