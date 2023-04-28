import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlaylistIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlaylistIcon = React.forwardRef<SVGSVGElement, TablerPlaylistIconProps>(function TablerPlaylistIcon(
	props,
	ref
) {
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
			<path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M17 17v-13h4" />
			<path d="M13 5h-10" />
			<path d="M3 9l10 0" />
			<path d="M9 13h-6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPlaylistIcon.displayName = "TablerPlaylistIcon";
}
