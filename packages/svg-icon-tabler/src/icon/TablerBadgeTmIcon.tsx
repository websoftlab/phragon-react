import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBadgeTmIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBadgeTmIcon = React.forwardRef<SVGSVGElement, TablerBadgeTmIconProps>(function TablerBadgeTmIcon(
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
			<path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
			<path d="M6 9h4" />
			<path d="M8 9v6" />
			<path d="M13 15v-6l2 3l2 -3v6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBadgeTmIcon.displayName = "TablerBadgeTmIcon";
}
