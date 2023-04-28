import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCalculatorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCalculatorIcon = React.forwardRef<SVGSVGElement, TablerCalculatorIconProps>(
	function TablerCalculatorIcon(props, ref) {
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
				<path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
				<path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
				<path d="M8 14l0 .01" />
				<path d="M12 14l0 .01" />
				<path d="M16 14l0 .01" />
				<path d="M8 17l0 .01" />
				<path d="M12 17l0 .01" />
				<path d="M16 17l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCalculatorIcon.displayName = "TablerCalculatorIcon";
}
