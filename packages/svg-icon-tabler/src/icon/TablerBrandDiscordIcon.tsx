import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDiscordIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDiscordIcon = React.forwardRef<SVGSVGElement, TablerBrandDiscordIconProps>(
	function TablerBrandDiscordIcon(props, ref) {
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
				<path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l.975 1.923a11.913 11.913 0 0 1 4.053 0l.972 -1.923c1.5 .16 3.043 .485 4.5 1.5c2 5.667 2.167 9.833 1.5 11.5c-.667 1.333 -2 3 -3.5 3c-.5 0 -2 -2 -2 -3" />
				<path d="M7 16.5c3.5 1 6.5 1 10 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDiscordIcon.displayName = "TablerBrandDiscordIcon";
}
