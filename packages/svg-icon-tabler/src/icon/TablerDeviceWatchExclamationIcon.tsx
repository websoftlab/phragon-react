import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceWatchExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceWatchExclamationIcon = React.forwardRef<SVGSVGElement, TablerDeviceWatchExclamationIconProps>(
	function TablerDeviceWatchExclamationIcon(props, ref) {
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
				<path d="M15 18h-6a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" />
				<path d="M9 18v3h6v-3" />
				<path d="M9 6v-3h6v3" />
				<path d="M19 16v3" />
				<path d="M19 22v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceWatchExclamationIcon.displayName = "TablerDeviceWatchExclamationIcon";
}
