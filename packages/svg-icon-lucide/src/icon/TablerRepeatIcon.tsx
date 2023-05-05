import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRepeatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRepeatIcon = React.forwardRef<SVGSVGElement, TablerRepeatIconProps>(function TablerRepeatIcon(
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
			<path d="m17 2 4 4-4 4" />
			<path d="M3 11v-1a4 4 0 0 1 4-4h14" />
			<path d="m7 22-4-4 4-4" />
			<path d="M21 13v1a4 4 0 0 1-4 4H3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRepeatIcon.displayName = "TablerRepeatIcon";
}
