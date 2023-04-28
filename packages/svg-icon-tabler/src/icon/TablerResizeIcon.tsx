import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerResizeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerResizeIcon = React.forwardRef<SVGSVGElement, TablerResizeIconProps>(function TablerResizeIcon(
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
			<path d="M4 11v8a1 1 0 0 0 1 1h8m-9 -14v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1" />
			<path d="M4 12h7a1 1 0 0 1 1 1v7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerResizeIcon.displayName = "TablerResizeIcon";
}
