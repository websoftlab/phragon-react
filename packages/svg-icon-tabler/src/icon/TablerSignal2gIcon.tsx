import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSignal2gIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSignal2gIcon = React.forwardRef<SVGSVGElement, TablerSignal2gIconProps>(function TablerSignal2gIcon(
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
			<path d="M19 8h-3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3v-4h-1" />
			<path d="M5 8h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSignal2gIcon.displayName = "TablerSignal2gIcon";
}
