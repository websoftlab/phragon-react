import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTemperatureCelsiusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTemperatureCelsiusIcon = React.forwardRef<SVGSVGElement, TablerTemperatureCelsiusIconProps>(
	function TablerTemperatureCelsiusIcon(props, ref) {
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
				<path d="M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTemperatureCelsiusIcon.displayName = "TablerTemperatureCelsiusIcon";
}
