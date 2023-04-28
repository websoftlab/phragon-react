import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlaylistOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlaylistOffIcon = React.forwardRef<SVGSVGElement, TablerPlaylistOffIconProps>(
	function TablerPlaylistOffIcon(props, ref) {
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
				<path d="M14 14a3 3 0 1 0 3 3" />
				<path d="M17 13v-9h4" />
				<path d="M13 5h-4m-4 0h-2" />
				<path d="M3 9h6" />
				<path d="M9 13h-6" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlaylistOffIcon.displayName = "TablerPlaylistOffIcon";
}
