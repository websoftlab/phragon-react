import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlaylistXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlaylistXIcon = React.forwardRef<SVGSVGElement, TablerPlaylistXIconProps>(
	function TablerPlaylistXIcon(props, ref) {
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
				<path d="M5 12h7" />
				<path d="M12 16h-7" />
				<path d="M16 14l4 4" />
				<path d="M20 14l-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlaylistXIcon.displayName = "TablerPlaylistXIcon";
}
