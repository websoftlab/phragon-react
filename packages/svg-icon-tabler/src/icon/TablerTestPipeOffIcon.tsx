import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTestPipeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTestPipeOffIcon = React.forwardRef<SVGSVGElement, TablerTestPipeOffIconProps>(
	function TablerTestPipeOffIcon(props, ref) {
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
				<path d="M20 8.04a803.533 803.533 0 0 0 -4 3.96m-2 2c-1.085 1.085 -3.125 3.14 -6.122 6.164a2.857 2.857 0 0 1 -4.041 -4.04c3.018 -3 5.073 -5.037 6.163 -6.124m2 -2c.872 -.872 2.191 -2.205 3.959 -4" />
				<path d="M7 13h6" />
				<path d="M19 15l1.5 1.6m-.74 3.173a2 2 0 0 1 -2.612 -2.608" />
				<path d="M15 3l6 6" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTestPipeOffIcon.displayName = "TablerTestPipeOffIcon";
}
