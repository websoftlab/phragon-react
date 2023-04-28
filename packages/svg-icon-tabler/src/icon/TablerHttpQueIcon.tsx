import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHttpQueIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHttpQueIcon = React.forwardRef<SVGSVGElement, TablerHttpQueIconProps>(function TablerHttpQueIcon(
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
			<path d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
			<path d="M6 15l1 1" />
			<path d="M21 8h-4v8h4" />
			<path d="M17 12h2.5" />
			<path d="M10 8v6a2 2 0 1 0 4 0v-6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHttpQueIcon.displayName = "TablerHttpQueIcon";
}
