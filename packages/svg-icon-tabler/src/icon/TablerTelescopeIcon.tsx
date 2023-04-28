import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTelescopeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTelescopeIcon = React.forwardRef<SVGSVGElement, TablerTelescopeIconProps>(
	function TablerTelescopeIcon(props, ref) {
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
				<path d="M6 21l6 -5l6 5" />
				<path d="M12 13v8" />
				<path d="M3.294 13.678l.166 .281c.52 .88 1.624 1.265 2.605 .91l14.242 -5.165a1.023 1.023 0 0 0 .565 -1.456l-2.62 -4.705a1.087 1.087 0 0 0 -1.447 -.42l-.056 .032l-12.694 7.618c-1.02 .613 -1.357 1.897 -.76 2.905z" />
				<path d="M14 5l3 5.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTelescopeIcon.displayName = "TablerTelescopeIcon";
}
