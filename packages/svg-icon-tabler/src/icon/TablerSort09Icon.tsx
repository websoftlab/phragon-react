import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSort09IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSort09Icon = React.forwardRef<SVGSVGElement, TablerSort09IconProps>(function TablerSort09Icon(
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
			<path d="M11 12h2" />
			<path d="M4 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0z" />
			<path d="M16 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSort09Icon.displayName = "TablerSort09Icon";
}
