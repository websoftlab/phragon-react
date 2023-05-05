import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCastleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCastleIcon = React.forwardRef<SVGSVGElement, TablerCastleIconProps>(function TablerCastleIcon(
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
			<path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" />
			<path d="M18 11V4H6v7" />
			<path d="M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4" />
			<path d="M22 11V9" />
			<path d="M2 11V9" />
			<path d="M6 4V2" />
			<path d="M18 4V2" />
			<path d="M10 4V2" />
			<path d="M14 4V2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCastleIcon.displayName = "TablerCastleIcon";
}
