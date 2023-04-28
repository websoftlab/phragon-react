import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudSnowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudSnowIcon = React.forwardRef<SVGSVGElement, TablerCloudSnowIconProps>(
	function TablerCloudSnowIcon(props, ref) {
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
				<path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
				<path d="M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCloudSnowIcon.displayName = "TablerCloudSnowIcon";
}
