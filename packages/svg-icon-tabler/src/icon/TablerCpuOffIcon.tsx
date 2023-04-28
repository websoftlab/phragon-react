import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCpuOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCpuOffIcon = React.forwardRef<SVGSVGElement, TablerCpuOffIconProps>(function TablerCpuOffIcon(
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
			<path d="M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706a1 1 0 0 1 -.708 .294h-12a1 1 0 0 1 -1 -1v-12c0 -.272 .108 -.518 .284 -.698" />
			<path d="M13 9h2v2m0 4h-6v-6" />
			<path d="M3 10h2" />
			<path d="M3 14h2" />
			<path d="M10 3v2" />
			<path d="M14 3v2" />
			<path d="M21 10h-2" />
			<path d="M21 14h-2" />
			<path d="M14 21v-2" />
			<path d="M10 21v-2" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCpuOffIcon.displayName = "TablerCpuOffIcon";
}
