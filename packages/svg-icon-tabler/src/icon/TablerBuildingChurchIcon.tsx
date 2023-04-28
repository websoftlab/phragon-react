import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingChurchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingChurchIcon = React.forwardRef<SVGSVGElement, TablerBuildingChurchIconProps>(
	function TablerBuildingChurchIcon(props, ref) {
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
				<path d="M10 21v-4a2 2 0 0 1 4 0v4" />
				<path d="M10 5l4 0" />
				<path d="M12 3l0 5" />
				<path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingChurchIcon.displayName = "TablerBuildingChurchIcon";
}
