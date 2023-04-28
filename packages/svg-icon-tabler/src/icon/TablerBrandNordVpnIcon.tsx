import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandNordVpnIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandNordVpnIcon = React.forwardRef<SVGSVGElement, TablerBrandNordVpnIconProps>(
	function TablerBrandNordVpnIcon(props, ref) {
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
				<path d="M9.992 15l-2.007 -3l-4.015 8c-2.212 -3.061 -2.625 -7.098 -.915 -10.463a10.14 10.14 0 0 1 8.945 -5.537a10.14 10.14 0 0 1 8.945 5.537c1.71 3.365 1.297 7.402 -.915 10.463l-4.517 -8l-1.505 1.5" />
				<path d="M14.5 15l-3 -6l-2.5 4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandNordVpnIcon.displayName = "TablerBrandNordVpnIcon";
}
