import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceTabletCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceTabletCodeIcon = React.forwardRef<SVGSVGElement, TablerDeviceTabletCodeIconProps>(
	function TablerDeviceTabletCodeIcon(props, ref) {
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
				<path d="M11.5 21h-5.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9" />
				<path d="M12.344 16.06a1 1 0 0 0 -1.07 1.627" />
				<path d="M20 21l2 -2l-2 -2" />
				<path d="M17 17l-2 2l2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceTabletCodeIcon.displayName = "TablerDeviceTabletCodeIcon";
}
