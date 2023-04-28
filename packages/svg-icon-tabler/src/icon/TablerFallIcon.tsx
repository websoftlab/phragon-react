import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFallIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFallIcon = React.forwardRef<SVGSVGElement, TablerFallIconProps>(function TablerFallIcon(props, ref) {
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
			<path d="M11 21l1 -5l-1 -4l-3 -4h4l3 -3" />
			<path d="M6 16l-1 -4l3 -4" />
			<path d="M6 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M13.5 12h2.5l4 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFallIcon.displayName = "TablerFallIcon";
}
