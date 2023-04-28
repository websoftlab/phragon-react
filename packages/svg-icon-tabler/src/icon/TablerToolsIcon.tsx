import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToolsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToolsIcon = React.forwardRef<SVGSVGElement, TablerToolsIconProps>(function TablerToolsIcon(
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
			<path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
			<path d="M14.5 5.5l4 4" />
			<path d="M12 8l-5 -5l-4 4l5 5" />
			<path d="M7 8l-1.5 1.5" />
			<path d="M16 12l5 5l-4 4l-5 -5" />
			<path d="M16 17l-1.5 1.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerToolsIcon.displayName = "TablerToolsIcon";
}
