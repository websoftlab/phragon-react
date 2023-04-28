import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodSingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodSingIcon = React.forwardRef<SVGSVGElement, TablerMoodSingIconProps>(function TablerMoodSingIcon(
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M9 9h.01" />
			<path d="M15 9h.01" />
			<path d="M15 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodSingIcon.displayName = "TablerMoodSingIcon";
}
