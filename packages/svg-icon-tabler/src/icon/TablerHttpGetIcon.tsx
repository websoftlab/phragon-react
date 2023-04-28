import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHttpGetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHttpGetIcon = React.forwardRef<SVGSVGElement, TablerHttpGetIconProps>(function TablerHttpGetIcon(
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
			<path d="M7 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
			<path d="M14 8h-4v8h4" />
			<path d="M10 12h2.5" />
			<path d="M17 8h4" />
			<path d="M19 8v8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHttpGetIcon.displayName = "TablerHttpGetIcon";
}
