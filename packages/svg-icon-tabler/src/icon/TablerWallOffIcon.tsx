import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWallOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWallOffIcon = React.forwardRef<SVGSVGElement, TablerWallOffIconProps>(function TablerWallOffIcon(
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
			<path d="M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361 .36 -.86 .583 -1.411 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.55 .222 -1.047 .58 -1.409" />
			<path d="M4 8h4m4 0h8" />
			<path d="M20 12h-4m-4 0h-8" />
			<path d="M4 16h12" />
			<path d="M9 4v1" />
			<path d="M14 8v2" />
			<path d="M8 12v4" />
			<path d="M11 16v4" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWallOffIcon.displayName = "TablerWallOffIcon";
}
