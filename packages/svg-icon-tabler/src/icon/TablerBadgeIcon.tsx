import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBadgeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBadgeIcon = React.forwardRef<SVGSVGElement, TablerBadgeIconProps>(function TablerBadgeIcon(
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
			<path d="M17 17v-13l-5 3l-5 -3v13l5 3z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBadgeIcon.displayName = "TablerBadgeIcon";
}
