import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToyBrickIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToyBrickIcon = React.forwardRef<SVGSVGElement, TablerToyBrickIconProps>(function TablerToyBrickIcon(
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
			<path d="M4 8 H20 A1 1 0 0 1 21 9 V19 A1 1 0 0 1 20 20 H4 A1 1 0 0 1 3 19 V9 A1 1 0 0 1 4 8 z" />
			<path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
			<path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerToyBrickIcon.displayName = "TablerToyBrickIcon";
}
