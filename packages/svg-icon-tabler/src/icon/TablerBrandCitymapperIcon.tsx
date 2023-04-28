import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCitymapperIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCitymapperIcon = React.forwardRef<SVGSVGElement, TablerBrandCitymapperIconProps>(
	function TablerBrandCitymapperIcon(props, ref) {
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
				<path d="M3 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z" />
				<path d="M21 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z" />
				<path d="M8 12h8" />
				<path d="M13 9l3 3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCitymapperIcon.displayName = "TablerBrandCitymapperIcon";
}
