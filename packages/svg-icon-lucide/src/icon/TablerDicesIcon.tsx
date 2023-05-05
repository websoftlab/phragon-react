import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDicesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDicesIcon = React.forwardRef<SVGSVGElement, TablerDicesIconProps>(function TablerDicesIcon(
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
			<path d="M4 10 H12 A2 2 0 0 1 14 12 V20 A2 2 0 0 1 12 22 H4 A2 2 0 0 1 2 20 V12 A2 2 0 0 1 4 10 z" />
			<path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
			<path d="M6 18h.01" />
			<path d="M10 14h.01" />
			<path d="M15 6h.01" />
			<path d="M18 9h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDicesIcon.displayName = "TablerDicesIcon";
}
