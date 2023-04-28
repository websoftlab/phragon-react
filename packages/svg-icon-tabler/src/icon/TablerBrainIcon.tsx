import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrainIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrainIcon = React.forwardRef<SVGSVGElement, TablerBrainIconProps>(function TablerBrainIcon(
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
			<path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
			<path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
			<path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
			<path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
			<path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
			<path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrainIcon.displayName = "TablerBrainIcon";
}
