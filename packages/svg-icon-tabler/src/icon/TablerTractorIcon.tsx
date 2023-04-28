import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTractorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTractorIcon = React.forwardRef<SVGSVGElement, TablerTractorIconProps>(function TablerTractorIcon(
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
			<path d="M7 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M7 15l0 .01" />
			<path d="M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M10.5 17l6.5 0" />
			<path d="M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5" />
			<path d="M18 5h-1a1 1 0 0 0 -1 1v4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTractorIcon.displayName = "TablerTractorIcon";
}
