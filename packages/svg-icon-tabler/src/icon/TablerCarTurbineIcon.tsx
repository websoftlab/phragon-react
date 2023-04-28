import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCarTurbineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCarTurbineIcon = React.forwardRef<SVGSVGElement, TablerCarTurbineIconProps>(
	function TablerCarTurbineIcon(props, ref) {
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
				<path d="M11 13m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M18.86 11c.088 .66 .14 1.512 .14 2a8 8 0 1 1 -8 -8h6" />
				<path d="M11 9c2.489 .108 4.489 .108 6 0" />
				<path d="M17 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M11 13l-3.5 -1.5" />
				<path d="M11 13l2.5 3" />
				<path d="M8.5 16l2.5 -3" />
				<path d="M11 13l3.5 -1.5" />
				<path d="M11 9v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCarTurbineIcon.displayName = "TablerCarTurbineIcon";
}
