import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherBluetoothIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherBluetoothIcon = React.forwardRef<SVGSVGElement, FeatherBluetoothIconProps>(
	function FeatherBluetoothIcon(props, ref) {
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
				<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherBluetoothIcon.displayName = "FeatherBluetoothIcon";
}
