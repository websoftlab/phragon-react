import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFishHookIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFishHookIcon = React.forwardRef<SVGSVGElement, TablerFishHookIconProps>(function TablerFishHookIcon(
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
			<path d="M16 9v6a5 5 0 0 1 -10 0v-4l3 3" />
			<path d="M16 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M16 5v-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFishHookIcon.displayName = "TablerFishHookIcon";
}
