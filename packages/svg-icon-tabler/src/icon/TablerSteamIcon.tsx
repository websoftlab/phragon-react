import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSteamIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSteamIcon = React.forwardRef<SVGSVGElement, TablerSteamIconProps>(function TablerSteamIcon(
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
			<path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M4 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M20 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M5.5 5.5l3 3" />
			<path d="M15.5 15.5l3 3" />
			<path d="M18.5 5.5l-3 3" />
			<path d="M8.5 15.5l-3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSteamIcon.displayName = "TablerSteamIcon";
}
