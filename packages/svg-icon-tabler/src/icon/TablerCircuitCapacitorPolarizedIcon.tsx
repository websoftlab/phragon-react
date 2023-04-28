import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitCapacitorPolarizedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitCapacitorPolarizedIcon = React.forwardRef<
	SVGSVGElement,
	TablerCircuitCapacitorPolarizedIconProps
>(function TablerCircuitCapacitorPolarizedIcon(props, ref) {
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
			<path d="M22 12h-8" />
			<path d="M2 12h8" />
			<path d="M10 7v10" />
			<path d="M14 7v10" />
			<path d="M17 5h4" />
			<path d="M19 3v4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCircuitCapacitorPolarizedIcon.displayName = "TablerCircuitCapacitorPolarizedIcon";
}
