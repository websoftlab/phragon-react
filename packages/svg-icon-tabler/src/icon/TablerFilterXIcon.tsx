import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFilterXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFilterXIcon = React.forwardRef<SVGSVGElement, TablerFilterXIconProps>(function TablerFilterXIcon(
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
			<path d="M13.785 19.405l-4.785 1.595v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414" />
			<path d="M22 22l-5 -5" />
			<path d="M17 22l5 -5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFilterXIcon.displayName = "TablerFilterXIcon";
}
