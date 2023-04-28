import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWallpaperOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWallpaperOffIcon = React.forwardRef<SVGSVGElement, TablerWallpaperOffIconProps>(
	function TablerWallpaperOffIcon(props, ref) {
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
				<path d="M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409a2 2 0 0 1 -1.42 .591h-12" />
				<path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M8 18v-10m-3.427 -3.402c-.353 .362 -.573 .856 -.573 1.402v12" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWallpaperOffIcon.displayName = "TablerWallpaperOffIcon";
}
