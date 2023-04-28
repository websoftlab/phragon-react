import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArtboardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArtboardIcon = React.forwardRef<SVGSVGElement, TablerArtboardIconProps>(function TablerArtboardIcon(
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
			<path d="M8 8m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
			<path d="M3 8l1 0" />
			<path d="M3 16l1 0" />
			<path d="M8 3l0 1" />
			<path d="M16 3l0 1" />
			<path d="M20 8l1 0" />
			<path d="M20 16l1 0" />
			<path d="M8 20l0 1" />
			<path d="M16 20l0 1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerArtboardIcon.displayName = "TablerArtboardIcon";
}
