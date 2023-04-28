import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSwitchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSwitchIcon = React.forwardRef<SVGSVGElement, TablerSwitchIconProps>(function TablerSwitchIcon(
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
			<path d="M15 4l4 0l0 4" />
			<path d="M14.75 9.25l4.25 -5.25" />
			<path d="M5 19l4 -4" />
			<path d="M15 19l4 0l0 -4" />
			<path d="M5 5l14 14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSwitchIcon.displayName = "TablerSwitchIcon";
}
