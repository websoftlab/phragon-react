import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingPavilionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingPavilionIcon = React.forwardRef<SVGSVGElement, TablerBuildingPavilionIconProps>(
	function TablerBuildingPavilionIcon(props, ref) {
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
				<path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7" />
				<path d="M6 21l0 -9" />
				<path d="M18 21l0 -9" />
				<path d="M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingPavilionIcon.displayName = "TablerBuildingPavilionIcon";
}
