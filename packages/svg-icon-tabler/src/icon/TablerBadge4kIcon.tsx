import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBadge4kIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBadge4kIcon = React.forwardRef<SVGSVGElement, TablerBadge4kIconProps>(function TablerBadge4kIcon(
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
			<path d="M7 9v2a1 1 0 0 0 1 1h1" />
			<path d="M10 9v6" />
			<path d="M14 9v6" />
			<path d="M17 9l-2 3l2 3" />
			<path d="M15 12h-1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBadge4kIcon.displayName = "TablerBadge4kIcon";
}
