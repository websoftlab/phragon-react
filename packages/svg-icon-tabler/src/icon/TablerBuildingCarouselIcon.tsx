import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingCarouselIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingCarouselIcon = React.forwardRef<SVGSVGElement, TablerBuildingCarouselIconProps>(
	function TablerBuildingCarouselIcon(props, ref) {
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
				<path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
				<path d="M5 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M8 22l4 -10l4 10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingCarouselIcon.displayName = "TablerBuildingCarouselIcon";
}
