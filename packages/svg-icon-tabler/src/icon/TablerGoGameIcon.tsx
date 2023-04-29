import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGoGameIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGoGameIcon = React.forwardRef<SVGSVGElement, TablerGoGameIconProps>(function TablerGoGameIcon(
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
			<path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M3 12h7m4 0h7" />
			<path d="M3 6h1m4 0h13" />
			<path d="M3 18h1m4 0h8m4 0h1" />
			<path d="M6 3v1m0 4v8m0 4v1" />
			<path d="M12 3v7m0 4v7" />
			<path d="M18 3v13m0 4v1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGoGameIcon.displayName = "TablerGoGameIcon";
}