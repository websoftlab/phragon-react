import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMicrophone2OffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMicrophone2OffIcon = React.forwardRef<SVGSVGElement, TablerMicrophone2OffIconProps>(
	function TablerMicrophone2OffIcon(props, ref) {
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
				<path d="M16.908 12.917a5 5 0 1 0 -5.827 -5.819" />
				<path d="M10.116 10.125l-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461 -6.529" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMicrophone2OffIcon.displayName = "TablerMicrophone2OffIcon";
}
