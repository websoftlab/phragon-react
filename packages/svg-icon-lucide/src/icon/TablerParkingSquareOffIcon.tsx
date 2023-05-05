import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerParkingSquareOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerParkingSquareOffIcon = React.forwardRef<SVGSVGElement, TablerParkingSquareOffIconProps>(
	function TablerParkingSquareOffIcon(props, ref) {
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
				<path d="M3.59 3.59A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" />
				<path d="M3 8.66V19c0 1.1.9 2 2 2h10.34" />
				<path d="m2 2 20 20" />
				<path d="M13 13a3 3 0 1 0 0-6H9v2" />
				<path d="M9 17v-2.34" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerParkingSquareOffIcon.displayName = "TablerParkingSquareOffIcon";
}
