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
			<path d="M4 4 H20 A2 2 0 0 1 22 6 V7 A2 2 0 0 1 20 9 H4 A2 2 0 0 1 2 7 V6 A2 2 0 0 1 4 4 z" />
			<path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
			<path d="M10 13h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerArchiveIcon.displayName = "TablerArchiveIcon";
}
