import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBluetoothIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBluetoothIcon = React.forwardRef<SVGSVGElement, TablerBluetoothIconProps>(
	function TablerBluetoothIcon(props, ref) {
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
				<path d="m7 7 10 10-5 5V2l5 5L7 17" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBluetoothIcon.displayName = "TablerBluetoothIcon";
}
