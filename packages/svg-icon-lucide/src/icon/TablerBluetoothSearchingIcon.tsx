import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBluetoothSearchingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBluetoothSearchingIcon = React.forwardRef<SVGSVGElement, TablerBluetoothSearchingIconProps>(
	function TablerBluetoothSearchingIcon(props, ref) {
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
				<path d="M20.83 14.83a4 4 0 0 0 0-5.66" />
				<path d="M18 12h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBluetoothSearchingIcon.displayName = "TablerBluetoothSearchingIcon";
}
