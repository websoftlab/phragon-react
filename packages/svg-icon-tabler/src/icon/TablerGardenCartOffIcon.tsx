import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGardenCartOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGardenCartOffIcon = React.forwardRef<SVGSVGElement, TablerGardenCartOffIconProps>(
	function TablerGardenCartOffIcon(props, ref) {
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
				<path d="M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527" />
				<path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" />
				<path d="M6 8h2m4 0h9l-3 6.01m-3.319 .693l-4.276 -.45a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGardenCartOffIcon.displayName = "TablerGardenCartOffIcon";
}
