import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlantOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlantOffIcon = React.forwardRef<SVGSVGElement, TablerPlantOffIconProps>(function TablerPlantOffIcon(
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
			<path d="M17 17v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4h8" />
			<path d="M11.9 7.908a6 6 0 0 0 -4.79 -4.806m-4.11 -.102v2a6 6 0 0 0 6 6h2" />
			<path d="M12.531 8.528a6 6 0 0 1 5.469 -3.528h3v1a6 6 0 0 1 -5.037 5.923" />
			<path d="M12 15v-3" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPlantOffIcon.displayName = "TablerPlantOffIcon";
}
