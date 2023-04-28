import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodXdIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodXdIcon = React.forwardRef<SVGSVGElement, TablerMoodXdIconProps>(function TablerMoodXdIcon(
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
			<path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
			<path d="M9 14h6a3 3 0 1 1 -6 0z" />
			<path d="M9 8l6 3" />
			<path d="M9 11l6 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodXdIcon.displayName = "TablerMoodXdIcon";
}
