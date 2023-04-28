import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBusStopIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBusStopIcon = React.forwardRef<SVGSVGElement, TablerBusStopIconProps>(function TablerBusStopIcon(
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
			<path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
			<path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2" />
			<path d="M16 17h-8" />
			<path d="M16 5l1.5 7h4.5" />
			<path d="M9.5 10h7.5" />
			<path d="M12 5v5" />
			<path d="M5 9v11" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBusStopIcon.displayName = "TablerBusStopIcon";
}
