import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeLinkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeLinkIcon = React.forwardRef<SVGSVGElement, TablerHomeLinkIconProps>(function TablerHomeLinkIcon(
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
			<path d="M20.085 11.085l-8.085 -8.085l-9 9h2v7a2 2 0 0 0 2 2h4.5" />
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.807 1.143" />
			<path d="M21 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M21 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M16 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M21 16l-5 3l5 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHomeLinkIcon.displayName = "TablerHomeLinkIcon";
}
