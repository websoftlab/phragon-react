import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAirVentIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAirVentIcon = React.forwardRef<SVGSVGElement, TablerAirVentIconProps>(function TablerAirVentIcon(
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
			<path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
			<path d="M6 8h12" />
			<path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
			<path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAirVentIcon.displayName = "TablerAirVentIcon";
}
