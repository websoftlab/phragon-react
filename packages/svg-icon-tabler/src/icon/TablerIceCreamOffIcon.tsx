import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIceCreamOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIceCreamOffIcon = React.forwardRef<SVGSVGElement, TablerIceCreamOffIconProps>(
	function TablerIceCreamOffIcon(props, ref) {
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
				<path d="M12 21.5v-4.5" />
				<path d="M8 8v9h8v-1m0 -4v-5a4 4 0 0 0 -7.277 -2.294" />
				<path d="M8 10.5l1.74 -.76m2.79 -1.222l3.47 -1.518" />
				<path d="M8 14.5l4.488 -1.964" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIceCreamOffIcon.displayName = "TablerIceCreamOffIcon";
}
