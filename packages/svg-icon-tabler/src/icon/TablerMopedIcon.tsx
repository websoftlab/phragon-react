import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMopedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMopedIcon = React.forwardRef<SVGSVGElement, TablerMopedIconProps>(function TablerMopedIcon(
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
			<path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1" />
			<path d="M6 9l3 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMopedIcon.displayName = "TablerMopedIcon";
}
