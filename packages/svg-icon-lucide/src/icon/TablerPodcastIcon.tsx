import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPodcastIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPodcastIcon = React.forwardRef<SVGSVGElement, TablerPodcastIconProps>(function TablerPodcastIcon(
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
			<path d="M13 11 A1 1 0 0 1 12 12 A1 1 0 0 1 11 11 A1 1 0 0 1 13 11" />
			<path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z" />
			<path d="M8 14a5 5 0 1 1 8 0" />
			<path d="M17 18.5a9 9 0 1 0-10 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPodcastIcon.displayName = "TablerPodcastIcon";
}
