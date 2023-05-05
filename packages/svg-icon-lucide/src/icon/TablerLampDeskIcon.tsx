import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLampDeskIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLampDeskIcon = React.forwardRef<SVGSVGElement, TablerLampDeskIconProps>(function TablerLampDeskIcon(
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
			<path d="m14 5-3 3 2 7 8-8-7-2Z" />
			<path d="m14 5-3 3-3-3 3-3 3 3Z" />
			<path d="M9.5 6.5 4 12l3 6" />
			<path d="M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLampDeskIcon.displayName = "TablerLampDeskIcon";
}
