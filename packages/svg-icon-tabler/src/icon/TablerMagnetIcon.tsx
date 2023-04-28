import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMagnetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMagnetIcon = React.forwardRef<SVGSVGElement, TablerMagnetIconProps>(function TablerMagnetIcon(
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
			<path d="M4 13v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a2 2 0 0 0 6 0v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a8 8 0 0 1 -16 0" />
			<path d="M4 8l5 0" />
			<path d="M15 8l4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMagnetIcon.displayName = "TablerMagnetIcon";
}
