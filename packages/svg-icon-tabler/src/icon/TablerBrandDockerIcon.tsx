import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDockerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDockerIcon = React.forwardRef<SVGSVGElement, TablerBrandDockerIconProps>(
	function TablerBrandDockerIcon(props, ref) {
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
				<path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z" />
				<path d="M5 10h3v3h-3z" />
				<path d="M8 10h3v3h-3z" />
				<path d="M11 10h3v3h-3z" />
				<path d="M8 7h3v3h-3z" />
				<path d="M11 7h3v3h-3z" />
				<path d="M11 4h3v3h-3z" />
				<path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" />
				<path d="M10 16l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDockerIcon.displayName = "TablerBrandDockerIcon";
}
