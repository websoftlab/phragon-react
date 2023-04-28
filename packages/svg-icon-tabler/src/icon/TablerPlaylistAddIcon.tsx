import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlaylistAddIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlaylistAddIcon = React.forwardRef<SVGSVGElement, TablerPlaylistAddIconProps>(
	function TablerPlaylistAddIcon(props, ref) {
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
				<path d="M19 8h-14" />
				<path d="M5 12h9" />
				<path d="M11 16h-6" />
				<path d="M15 16h6" />
				<path d="M18 13v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlaylistAddIcon.displayName = "TablerPlaylistAddIcon";
}
