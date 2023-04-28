import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZoomPanIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZoomPanIcon = React.forwardRef<SVGSVGElement, TablerZoomPanIconProps>(function TablerZoomPanIcon(
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
			<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M17 17l-2.5 -2.5" />
			<path d="M10 5l2 -2l2 2" />
			<path d="M19 10l2 2l-2 2" />
			<path d="M5 10l-2 2l2 2" />
			<path d="M10 19l2 2l2 -2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerZoomPanIcon.displayName = "TablerZoomPanIcon";
}
