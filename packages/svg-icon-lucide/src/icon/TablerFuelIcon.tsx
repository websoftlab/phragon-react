import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFuelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFuelIcon = React.forwardRef<SVGSVGElement, TablerFuelIconProps>(function TablerFuelIcon(props, ref) {
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
			<path d="M3 22 L15 22" />
			<path d="M4 9 L14 9" />
			<path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
			<path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFuelIcon.displayName = "TablerFuelIcon";
}
