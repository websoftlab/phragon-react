import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTruckReturnIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTruckReturnIcon = React.forwardRef<SVGSVGElement, TablerTruckReturnIconProps>(
	function TablerTruckReturnIcon(props, ref) {
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
				<path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" />
				<path d="M9 17l6 0" />
				<path d="M13 6h5l3 5v6h-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTruckReturnIcon.displayName = "TablerTruckReturnIcon";
}
