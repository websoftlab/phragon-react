import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGlassesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGlassesIcon = React.forwardRef<SVGSVGElement, TablerGlassesIconProps>(function TablerGlassesIcon(
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
			<path d="M10 15 A4 4 0 0 1 6 19 A4 4 0 0 1 2 15 A4 4 0 0 1 10 15" />
			<path d="M22 15 A4 4 0 0 1 18 19 A4 4 0 0 1 14 15 A4 4 0 0 1 22 15" />
			<path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
			<path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
			<path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGlassesIcon.displayName = "TablerGlassesIcon";
}
