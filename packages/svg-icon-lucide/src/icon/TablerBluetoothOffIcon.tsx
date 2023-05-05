import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBluetoothOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBluetoothOffIcon = React.forwardRef<SVGSVGElement, TablerBluetoothOffIconProps>(
	function TablerBluetoothOffIcon(props, ref) {
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
				<path d="m17 17-5 5V12l-5 5" />
				<path d="m2 2 20 20" />
				<path d="M14.5 9.5 17 7l-5-5v4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBluetoothOffIcon.displayName = "TablerBluetoothOffIcon";
}
