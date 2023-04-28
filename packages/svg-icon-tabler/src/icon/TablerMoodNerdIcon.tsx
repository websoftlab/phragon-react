import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodNerdIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodNerdIcon = React.forwardRef<SVGSVGElement, TablerMoodNerdIconProps>(function TablerMoodNerdIcon(
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
			<path d="M8 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M16 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
			<path d="M3.5 9h2.5" />
			<path d="M18 9h2.5" />
			<path d="M10 9.5c1.333 -1.333 2.667 -1.333 4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodNerdIcon.displayName = "TablerMoodNerdIcon";
}
