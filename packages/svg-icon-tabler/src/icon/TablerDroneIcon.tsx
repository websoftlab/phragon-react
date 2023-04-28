import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDroneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDroneIcon = React.forwardRef<SVGSVGElement, TablerDroneIconProps>(function TablerDroneIcon(
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
			<path d="M10 10h4v4h-4z" />
			<path d="M10 10l-3.5 -3.5" />
			<path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
			<path d="M14 10l3.5 -3.5" />
			<path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
			<path d="M14 14l3.5 3.5" />
			<path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
			<path d="M10 14l-3.5 3.5" />
			<path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDroneIcon.displayName = "TablerDroneIcon";
}
