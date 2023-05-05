import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTruckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTruckIcon = React.forwardRef<SVGSVGElement, TablerTruckIconProps>(function TablerTruckIcon(
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
			<path d="M10 17h4V5H2v12h3" />
			<path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
			<path d="M14 17h1" />
			<path d="M10 17.5 A2.5 2.5 0 0 1 7.5 20 A2.5 2.5 0 0 1 5 17.5 A2.5 2.5 0 0 1 10 17.5" />
			<path d="M20 17.5 A2.5 2.5 0 0 1 17.5 20 A2.5 2.5 0 0 1 15 17.5 A2.5 2.5 0 0 1 20 17.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTruckIcon.displayName = "TablerTruckIcon";
}
