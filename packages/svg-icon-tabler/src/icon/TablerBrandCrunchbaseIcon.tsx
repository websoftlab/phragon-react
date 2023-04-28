import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCrunchbaseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCrunchbaseIcon = React.forwardRef<SVGSVGElement, TablerBrandCrunchbaseIconProps>(
	function TablerBrandCrunchbaseIcon(props, ref) {
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
				<path d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M10.414 11.586a2 2 0 1 0 0 2.828" />
				<path d="M15 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M13 7v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCrunchbaseIcon.displayName = "TablerBrandCrunchbaseIcon";
}
