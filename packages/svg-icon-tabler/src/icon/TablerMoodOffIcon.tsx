import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodOffIcon = React.forwardRef<SVGSVGElement, TablerMoodOffIconProps>(function TablerMoodOffIcon(
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
			<path d="M5.634 5.638a9 9 0 0 0 12.732 12.724m1.679 -2.322a9 9 0 0 0 -12.08 -12.086" />
			<path d="M9 10h.01" />
			<path d="M15 10h.01" />
			<path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodOffIcon.displayName = "TablerMoodOffIcon";
}
