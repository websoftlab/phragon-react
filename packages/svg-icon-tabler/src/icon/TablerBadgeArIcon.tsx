import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBadgeArIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBadgeArIcon = React.forwardRef<SVGSVGElement, TablerBadgeArIconProps>(function TablerBadgeArIcon(
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
			<path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
			<path d="M7 13h3" />
			<path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBadgeArIcon.displayName = "TablerBadgeArIcon";
}
