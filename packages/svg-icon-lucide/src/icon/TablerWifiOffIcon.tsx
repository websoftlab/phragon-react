import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWifiOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWifiOffIcon = React.forwardRef<SVGSVGElement, TablerWifiOffIconProps>(function TablerWifiOffIcon(
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
			<path d="M2 2 L22 22" />
			<path d="M8.5 16.5a5 5 0 0 1 7 0" />
			<path d="M2 8.82a15 15 0 0 1 4.17-2.65" />
			<path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76" />
			<path d="M16.85 11.25a10 10 0 0 1 2.22 1.68" />
			<path d="M5 13a10 10 0 0 1 5.24-2.76" />
			<path d="M12 20 L12.01 20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWifiOffIcon.displayName = "TablerWifiOffIcon";
}
