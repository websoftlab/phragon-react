import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingArchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingArchIcon = React.forwardRef<SVGSVGElement, TablerBuildingArchIconProps>(
	function TablerBuildingArchIcon(props, ref) {
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
				<path d="M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15" />
				<path d="M9 21v-8a3 3 0 0 1 6 0v8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingArchIcon.displayName = "TablerBuildingArchIcon";
}
