import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCamperIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCamperIcon = React.forwardRef<SVGSVGElement, TablerCamperIconProps>(function TablerCamperIcon(
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
			<path d="M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
			<path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
			<path d="M5 18h-1a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2h12a4 4 0 0 1 4 4h-18" />
			<path d="M9 18h6" />
			<path d="M19 18h1a1 1 0 0 0 1 -1v-4l-3 -5" />
			<path d="M21 13h-7" />
			<path d="M14 8v10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCamperIcon.displayName = "TablerCamperIcon";
}
