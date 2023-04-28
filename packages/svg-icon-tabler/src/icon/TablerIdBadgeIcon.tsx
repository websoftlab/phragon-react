import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIdBadgeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIdBadgeIcon = React.forwardRef<SVGSVGElement, TablerIdBadgeIconProps>(function TablerIdBadgeIcon(
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
			<path d="M5 3m0 3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z" />
			<path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M10 6h4" />
			<path d="M9 18h6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerIdBadgeIcon.displayName = "TablerIdBadgeIcon";
}
