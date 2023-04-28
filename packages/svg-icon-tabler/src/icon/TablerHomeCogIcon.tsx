import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeCogIcon = React.forwardRef<SVGSVGElement, TablerHomeCogIconProps>(function TablerHomeCogIcon(
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
			<path d="M9 21v-6a2 2 0 0 1 2 -2h1.6" />
			<path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4.159" />
			<path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M18 14.5v1.5" />
			<path d="M18 20v1.5" />
			<path d="M21.032 16.25l-1.299 .75" />
			<path d="M16.27 19l-1.3 .75" />
			<path d="M14.97 16.25l1.3 .75" />
			<path d="M19.733 19l1.3 .75" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHomeCogIcon.displayName = "TablerHomeCogIcon";
}
