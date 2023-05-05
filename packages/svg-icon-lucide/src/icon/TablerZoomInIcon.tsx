import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZoomInIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZoomInIcon = React.forwardRef<SVGSVGElement, TablerZoomInIconProps>(function TablerZoomInIcon(
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
			<path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11" />
			<path d="M21 21 L16.65 16.65" />
			<path d="M11 8 L11 14" />
			<path d="M8 11 L14 11" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerZoomInIcon.displayName = "TablerZoomInIcon";
}
