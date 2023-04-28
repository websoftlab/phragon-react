import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceTabletBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceTabletBoltIcon = React.forwardRef<SVGSVGElement, TablerDeviceTabletBoltIconProps>(
	function TablerDeviceTabletBoltIcon(props, ref) {
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
				<path d="M13.5 21h-7.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
				<path d="M19 16l-2 3h4l-2 3" />
				<path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceTabletBoltIcon.displayName = "TablerDeviceTabletBoltIcon";
}
