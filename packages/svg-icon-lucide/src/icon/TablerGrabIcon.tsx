import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGrabIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGrabIcon = React.forwardRef<SVGSVGElement, TablerGrabIconProps>(function TablerGrabIcon(props, ref) {
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
			<path d="M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
			<path d="M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
			<path d="M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
			<path d="M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
			<path d="M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGrabIcon.displayName = "TablerGrabIcon";
}
