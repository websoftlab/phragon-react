import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrophyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrophyIcon = React.forwardRef<SVGSVGElement, TablerTrophyIconProps>(function TablerTrophyIcon(
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
			<path d="M8 21l8 0" />
			<path d="M12 17l0 4" />
			<path d="M7 4l10 0" />
			<path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
			<path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTrophyIcon.displayName = "TablerTrophyIcon";
}
