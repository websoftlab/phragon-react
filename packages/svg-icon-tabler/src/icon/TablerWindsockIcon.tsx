import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWindsockIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWindsockIcon = React.forwardRef<SVGSVGElement, TablerWindsockIconProps>(function TablerWindsockIcon(
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
			<path d="M6 3v18" />
			<path d="M6 11l12 -1v-4l-12 -1" />
			<path d="M10 5.5v5" />
			<path d="M14 6v4" />
			<path d="M4 21h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWindsockIcon.displayName = "TablerWindsockIcon";
}
