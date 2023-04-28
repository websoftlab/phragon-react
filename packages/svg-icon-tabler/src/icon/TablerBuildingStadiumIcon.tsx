import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingStadiumIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingStadiumIcon = React.forwardRef<SVGSVGElement, TablerBuildingStadiumIconProps>(
	function TablerBuildingStadiumIcon(props, ref) {
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
				<path d="M12 12m-8 0a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" />
				<path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" />
				<path d="M15 6h4v-3h-4v7" />
				<path d="M7 6h4v-3h-4v7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingStadiumIcon.displayName = "TablerBuildingStadiumIcon";
}
