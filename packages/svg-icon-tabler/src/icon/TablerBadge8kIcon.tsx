import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBadge8kIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBadge8kIcon = React.forwardRef<SVGSVGElement, TablerBadge8kIconProps>(function TablerBadge8kIcon(
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
			<path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
			<path d="M14 9v6" />
			<path d="M17 9l-2 3l2 3" />
			<path d="M15 12h-1" />
			<path d="M8.5 12h-.5a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBadge8kIcon.displayName = "TablerBadge8kIcon";
}
