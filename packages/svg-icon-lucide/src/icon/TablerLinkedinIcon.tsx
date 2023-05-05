import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLinkedinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLinkedinIcon = React.forwardRef<SVGSVGElement, TablerLinkedinIconProps>(function TablerLinkedinIcon(
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
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<path d="M2 9 H6 V21 H2 V9 z" />
			<path d="M6 4 A2 2 0 0 1 4 6 A2 2 0 0 1 2 4 A2 2 0 0 1 6 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLinkedinIcon.displayName = "TablerLinkedinIcon";
}
