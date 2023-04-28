import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBadgeWcIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBadgeWcIcon = React.forwardRef<SVGSVGElement, TablerBadgeWcIconProps>(function TablerBadgeWcIcon(
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
			<path d="M6.5 9l.5 6l2 -4l2 4l.5 -6" />
			<path d="M17 10.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBadgeWcIcon.displayName = "TablerBadgeWcIcon";
}
