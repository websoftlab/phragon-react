import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListTreeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListTreeIcon = React.forwardRef<SVGSVGElement, TablerListTreeIconProps>(function TablerListTreeIcon(
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
			<path d="M21 12h-8" />
			<path d="M21 6H8" />
			<path d="M21 18h-8" />
			<path d="M3 6v4c0 1.1.9 2 2 2h3" />
			<path d="M3 10v6c0 1.1.9 2 2 2h3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerListTreeIcon.displayName = "TablerListTreeIcon";
}
