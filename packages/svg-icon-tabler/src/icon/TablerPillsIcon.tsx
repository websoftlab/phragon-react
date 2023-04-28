import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPillsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPillsIcon = React.forwardRef<SVGSVGElement, TablerPillsIconProps>(function TablerPillsIcon(
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
			<path d="M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
			<path d="M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M4.5 4.5l7 7" />
			<path d="M19.5 14.5l-5 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPillsIcon.displayName = "TablerPillsIcon";
}
