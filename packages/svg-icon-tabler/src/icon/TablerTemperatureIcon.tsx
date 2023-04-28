import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTemperatureIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTemperatureIcon = React.forwardRef<SVGSVGElement, TablerTemperatureIconProps>(
	function TablerTemperatureIcon(props, ref) {
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
				<path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
				<path d="M10 9l4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTemperatureIcon.displayName = "TablerTemperatureIcon";
}
