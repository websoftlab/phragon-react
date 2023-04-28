import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWallpaperIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWallpaperIcon = React.forwardRef<SVGSVGElement, TablerWallpaperIconProps>(
	function TablerWallpaperIcon(props, ref) {
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
				<path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12" />
				<path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M8 18v-12a2 2 0 1 0 -4 0v12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWallpaperIcon.displayName = "TablerWallpaperIcon";
}
