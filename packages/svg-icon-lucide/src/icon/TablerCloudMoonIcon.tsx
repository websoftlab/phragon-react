import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudMoonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudMoonIcon = React.forwardRef<SVGSVGElement, TablerCloudMoonIconProps>(
	function TablerCloudMoonIcon(props, ref) {
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
				<path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
				<path d="M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCloudMoonIcon.displayName = "TablerCloudMoonIcon";
}
