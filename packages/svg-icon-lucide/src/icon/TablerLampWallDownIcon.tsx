import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLampWallDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLampWallDownIcon = React.forwardRef<SVGSVGElement, TablerLampWallDownIconProps>(
	function TablerLampWallDownIcon(props, ref) {
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
				<path d="M11 13h6l3 7H8l3-7Z" />
				<path d="M14 13V8a2 2 0 0 0-2-2H8" />
				<path d="M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLampWallDownIcon.displayName = "TablerLampWallDownIcon";
}
