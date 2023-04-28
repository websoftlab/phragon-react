import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSdkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSdkIcon = React.forwardRef<SVGSVGElement, TablerSdkIconProps>(function TablerSdkIcon(props, ref) {
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
			<path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" />
			<path d="M17 8v8" />
			<path d="M21 8l-3 4l3 4" />
			<path d="M17 12h1" />
			<path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSdkIcon.displayName = "TablerSdkIcon";
}
