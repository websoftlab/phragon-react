import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrushIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrushIcon = React.forwardRef<SVGSVGElement, TablerBrushIconProps>(function TablerBrushIcon(
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
			<path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
			<path d="M21 3a16 16 0 0 0 -12.8 10.2" />
			<path d="M21 3a16 16 0 0 1 -10.2 12.8" />
			<path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrushIcon.displayName = "TablerBrushIcon";
}
