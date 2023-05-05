import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGhostIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGhostIcon = React.forwardRef<SVGSVGElement, TablerGhostIconProps>(function TablerGhostIcon(
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
			<path d="M9 10h.01" />
			<path d="M15 10h.01" />
			<path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGhostIcon.displayName = "TablerGhostIcon";
}
