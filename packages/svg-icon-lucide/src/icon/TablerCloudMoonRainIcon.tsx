import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudMoonRainIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudMoonRainIcon = React.forwardRef<SVGSVGElement, TablerCloudMoonRainIconProps>(
	function TablerCloudMoonRainIcon(props, ref) {
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
				<path d="M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197" />
				<path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
				<path d="M11 20v2" />
				<path d="M7 19v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCloudMoonRainIcon.displayName = "TablerCloudMoonRainIcon";
}
