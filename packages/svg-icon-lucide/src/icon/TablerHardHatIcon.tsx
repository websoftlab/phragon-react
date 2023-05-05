import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHardHatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHardHatIcon = React.forwardRef<SVGSVGElement, TablerHardHatIconProps>(function TablerHardHatIcon(
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
			<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
			<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
			<path d="M4 15v-3a6 6 0 0 1 6-6h0" />
			<path d="M14 6h0a6 6 0 0 1 6 6v3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHardHatIcon.displayName = "TablerHardHatIcon";
}
