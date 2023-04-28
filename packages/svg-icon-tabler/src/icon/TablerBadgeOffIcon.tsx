import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBadgeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBadgeOffIcon = React.forwardRef<SVGSVGElement, TablerBadgeOffIconProps>(function TablerBadgeOffIcon(
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
			<path d="M7 7v10l5 3l5 -3m0 -4v-9l-5 3l-2.496 -1.497" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBadgeOffIcon.displayName = "TablerBadgeOffIcon";
}
