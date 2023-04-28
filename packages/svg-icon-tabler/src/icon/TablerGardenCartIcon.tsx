import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGardenCartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGardenCartIcon = React.forwardRef<SVGSVGElement, TablerGardenCartIconProps>(
	function TablerGardenCartIcon(props, ref) {
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
				<path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
				<path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" />
				<path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGardenCartIcon.displayName = "TablerGardenCartIcon";
}
