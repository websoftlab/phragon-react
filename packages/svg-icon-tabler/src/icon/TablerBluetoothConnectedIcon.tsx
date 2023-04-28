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
				<path d="M7 8l10 8l-5 4l0 -16l5 4l-10 8" />
				<path d="M4 12l1 0" />
				<path d="M18 12l1 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBluetoothConnectedIcon.displayName = "TablerBluetoothConnectedIcon";
}
