import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSignal4gIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSignal4gIcon = React.forwardRef<SVGSVGElement, TablerSignal4gIconProps>(function TablerSignal4gIcon(
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
			<path d="M6 8v3a1 1 0 0 0 1 1h3" />
			<path d="M10 8v8" />
			<path d="M17 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSignal4gIcon.displayName = "TablerSignal4gIcon";
}
