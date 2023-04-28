import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPngIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPngIcon = React.forwardRef<SVGSVGElement, TablerPngIconProps>(function TablerPngIcon(props, ref) {
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
			<path d="M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
			<path d="M3 16v-8h2a2 2 0 1 1 0 4h-2" />
			<path d="M10 16v-8l4 8v-8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPngIcon.displayName = "TablerPngIcon";
}
