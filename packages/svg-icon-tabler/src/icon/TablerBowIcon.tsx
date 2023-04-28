import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBowIcon = React.forwardRef<SVGSVGElement, TablerBowIconProps>(function TablerBowIcon(props, ref) {
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
			<path d="M17 3h4v4" />
			<path d="M21 3l-15 15" />
			<path d="M3 18h3v3" />
			<path d="M16.5 20c1.576 -1.576 2.5 -4.095 2.5 -6.5c0 -4.81 -3.69 -8.5 -8.5 -8.5c-2.415 0 -4.922 .913 -6.5 2.5l12.5 12.5z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBowIcon.displayName = "TablerBowIcon";
}
