import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceTabletMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceTabletMinusIcon = React.forwardRef<SVGSVGElement, TablerDeviceTabletMinusIconProps>(
	function TablerDeviceTabletMinusIcon(props, ref) {
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
				<path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v11" />
				<path d="M12.872 16.51a1 1 0 1 0 -.872 1.49" />
				<path d="M16 19h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceTabletMinusIcon.displayName = "TablerDeviceTabletMinusIcon";
}
