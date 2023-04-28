import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandSpotifyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandSpotifyIcon = React.forwardRef<SVGSVGElement, TablerBrandSpotifyIconProps>(
	function TablerBrandSpotifyIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
				<path d="M9 15c1.5 -1 4 -1 5 .5" />
				<path d="M7 9c2 -1 6 -2 10 .5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandSpotifyIcon.displayName = "TablerBrandSpotifyIcon";
}
