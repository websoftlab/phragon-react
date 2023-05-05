import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBusIcon = React.forwardRef<SVGSVGElement, TablerBusIconProps>(function TablerBusIcon(props, ref) {
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
			<path d="M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2" />
			<path d="M14 17H9" />
			<path d="M9 17.5 A2.5 2.5 0 0 1 6.5 20 A2.5 2.5 0 0 1 4 17.5 A2.5 2.5 0 0 1 9 17.5" />
			<path d="M19 17.5 A2.5 2.5 0 0 1 16.5 20 A2.5 2.5 0 0 1 14 17.5 A2.5 2.5 0 0 1 19 17.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBusIcon.displayName = "TablerBusIcon";
}
