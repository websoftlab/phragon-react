import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWandIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWandIcon = React.forwardRef<SVGSVGElement, TablerWandIconProps>(function TablerWandIcon(props, ref) {
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
			<path d="M6 21l15 -15l-3 -3l-15 15l3 3" />
			<path d="M15 6l3 3" />
			<path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
			<path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWandIcon.displayName = "TablerWandIcon";
}
