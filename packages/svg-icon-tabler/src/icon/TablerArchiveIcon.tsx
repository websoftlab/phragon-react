import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArchiveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArchiveIcon = React.forwardRef<SVGSVGElement, TablerArchiveIconProps>(function TablerArchiveIcon(
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
			<path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
			<path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
			<path d="M10 12l4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerArchiveIcon.displayName = "TablerArchiveIcon";
}
