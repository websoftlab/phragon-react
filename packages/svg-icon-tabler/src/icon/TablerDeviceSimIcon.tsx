import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceSimIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceSimIcon = React.forwardRef<SVGSVGElement, TablerDeviceSimIconProps>(
	function TablerDeviceSimIcon(props, ref) {
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
				<path d="M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1z" />
				<path d="M9 11h3v6" />
				<path d="M15 17v.01" />
				<path d="M15 14v.01" />
				<path d="M15 11v.01" />
				<path d="M9 14v.01" />
				<path d="M9 17v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceSimIcon.displayName = "TablerDeviceSimIcon";
}
