import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodKidIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodKidIcon = React.forwardRef<SVGSVGElement, TablerMoodKidIconProps>(function TablerMoodKidIcon(
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
			<path d="M9 10l.01 0" />
			<path d="M15 10l.01 0" />
			<path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
			<path d="M12 3a2 2 0 0 0 0 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodKidIcon.displayName = "TablerMoodKidIcon";
}
