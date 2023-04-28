import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingSkyscraperIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingSkyscraperIcon = React.forwardRef<SVGSVGElement, TablerBuildingSkyscraperIconProps>(
	function TablerBuildingSkyscraperIcon(props, ref) {
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
				<path d="M3 21l18 0" />
				<path d="M5 21v-14l8 -4v18" />
				<path d="M19 21v-10l-6 -4" />
				<path d="M9 9l0 .01" />
				<path d="M9 12l0 .01" />
				<path d="M9 15l0 .01" />
				<path d="M9 18l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingSkyscraperIcon.displayName = "TablerBuildingSkyscraperIcon";
}
