import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBellCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBellCodeIcon = React.forwardRef<SVGSVGElement, TablerBellCodeIconProps>(function TablerBellCodeIcon(
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
			<path d="M11.5 17h-7.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" />
			<path d="M9 17v1a3 3 0 0 0 2.498 2.958" />
			<path d="M20 21l2 -2l-2 -2" />
			<path d="M17 17l-2 2l2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBellCodeIcon.displayName = "TablerBellCodeIcon";
}
