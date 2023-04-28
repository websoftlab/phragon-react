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
				<path d="M7 8l10 8l-5 4l0 -16l5 4l-10 8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBluetoothIcon.displayName = "TablerBluetoothIcon";
}
