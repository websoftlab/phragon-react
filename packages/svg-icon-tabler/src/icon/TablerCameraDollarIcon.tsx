import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCameraDollarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCameraDollarIcon = React.forwardRef<SVGSVGElement, TablerCameraDollarIconProps>(
	function TablerCameraDollarIcon(props, ref) {
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
				<path d="M13 20h-8a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1.5" />
				<path d="M14.935 12.375a3.001 3.001 0 1 0 -1.902 3.442" />
				<path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
				<path d="M19 21v1m0 -8v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCameraDollarIcon.displayName = "TablerCameraDollarIcon";
}
