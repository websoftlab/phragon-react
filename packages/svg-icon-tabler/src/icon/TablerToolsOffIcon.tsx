import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToolsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToolsOffIcon = React.forwardRef<SVGSVGElement, TablerToolsOffIconProps>(function TablerToolsOffIcon(
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
			<path d="M16 12l4 -4a2.828 2.828 0 1 0 -4 -4l-4 4m-2 2l-7 7v4h4l7 -7" />
			<path d="M14.5 5.5l4 4" />
			<path d="M12 8l-5 -5m-2 2l-2 2l5 5" />
			<path d="M7 8l-1.5 1.5" />
			<path d="M16 12l5 5m-2 2l-2 2l-5 -5" />
			<path d="M16 17l-1.5 1.5" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerToolsOffIcon.displayName = "TablerToolsOffIcon";
}
