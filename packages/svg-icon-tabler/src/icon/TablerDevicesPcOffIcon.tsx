import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDevicesPcOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDevicesPcOffIcon = React.forwardRef<SVGSVGElement, TablerDevicesPcOffIconProps>(
	function TablerDevicesPcOffIcon(props, ref) {
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
				<path d="M9 9v10h-6v-14h2" />
				<path d="M13 9h9v7h-2m-4 0h-4v-4" />
				<path d="M14 19h5" />
				<path d="M17 17v2" />
				<path d="M6 13v.01" />
				<path d="M6 16v.01" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDevicesPcOffIcon.displayName = "TablerDevicesPcOffIcon";
}
