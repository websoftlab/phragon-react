import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBluetoothConnectedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBluetoothConnectedIcon = React.forwardRef<SVGSVGElement, TablerBluetoothConnectedIconProps>(
	function TablerBluetoothConnectedIcon(props, ref) {
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
				<path d="M18 12 L21 12" />
				<path d="M3 12 L6 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBluetoothConnectedIcon.displayName = "TablerBluetoothConnectedIcon";
}
