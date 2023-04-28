import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTemperatureFahrenheitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTemperatureFahrenheitIcon = React.forwardRef<SVGSVGElement, TablerTemperatureFahrenheitIconProps>(
	function TablerTemperatureFahrenheitIcon(props, ref) {
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
				<path d="M6 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M13 12l5 0" />
				<path d="M20 6h-6a1 1 0 0 0 -1 1v11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTemperatureFahrenheitIcon.displayName = "TablerTemperatureFahrenheitIcon";
}
