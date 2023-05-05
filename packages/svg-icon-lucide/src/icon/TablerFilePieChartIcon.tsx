import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFilePieChartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFilePieChartIcon = React.forwardRef<SVGSVGElement, TablerFilePieChartIconProps>(
	function TablerFilePieChartIcon(props, ref) {
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
				<path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
				<path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFilePieChartIcon.displayName = "TablerFilePieChartIcon";
}
