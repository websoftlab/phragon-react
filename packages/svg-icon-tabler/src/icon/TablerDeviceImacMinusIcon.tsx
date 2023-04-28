import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceImacMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceImacMinusIcon = React.forwardRef<SVGSVGElement, TablerDeviceImacMinusIconProps>(
	function TablerDeviceImacMinusIcon(props, ref) {
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
				<path d="M12.5 17h-8.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v11" />
				<path d="M3 13h18" />
				<path d="M8 21h4.5" />
				<path d="M10 17l-.5 4" />
				<path d="M16 19h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceImacMinusIcon.displayName = "TablerDeviceImacMinusIcon";
}
