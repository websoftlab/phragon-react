import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingCircusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingCircusIcon = React.forwardRef<SVGSVGElement, TablerBuildingCircusIconProps>(
	function TablerBuildingCircusIcon(props, ref) {
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
				<path d="M4 11h16" />
				<path d="M12 6.5c0 1 -5 4.5 -8 4.5" />
				<path d="M12 6.5c0 1 5 4.5 8 4.5" />
				<path d="M6 11c-.333 5.333 -1 8.667 -2 10h4c1 0 4 -4 4 -9v-1" />
				<path d="M18 11c.333 5.333 1 8.667 2 10h-4c-1 0 -4 -4 -4 -9v-1" />
				<path d="M12 7v-4l2 1h-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingCircusIcon.displayName = "TablerBuildingCircusIcon";
}
