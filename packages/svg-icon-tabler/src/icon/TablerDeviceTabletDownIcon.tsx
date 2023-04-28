import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceTabletDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceTabletDownIcon = React.forwardRef<SVGSVGElement, TablerDeviceTabletDownIconProps>(
	function TablerDeviceTabletDownIcon(props, ref) {
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
				<path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
				<path d="M19 16v6" />
				<path d="M22 19l-3 3l-3 -3" />
				<path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceTabletDownIcon.displayName = "TablerDeviceTabletDownIcon";
}
