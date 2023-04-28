import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGrillIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGrillIcon = React.forwardRef<SVGSVGElement, TablerGrillIconProps>(function TablerGrillIcon(
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
			<path d="M19 8h-14a6 6 0 0 0 6 6h2a6 6 0 0 0 6 -5.775l0 -.225z" />
			<path d="M17 20a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" />
			<path d="M15 14l1 2" />
			<path d="M9 14l-3 6" />
			<path d="M15 18h-8" />
			<path d="M15 5v-1" />
			<path d="M12 5v-1" />
			<path d="M9 5v-1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGrillIcon.displayName = "TablerGrillIcon";
}
