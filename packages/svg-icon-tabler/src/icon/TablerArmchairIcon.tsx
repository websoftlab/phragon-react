import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArmchairIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArmchairIcon = React.forwardRef<SVGSVGElement, TablerArmchairIconProps>(function TablerArmchairIcon(
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
			<path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
			<path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
			<path d="M6 19v2" />
			<path d="M18 19v2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerArmchairIcon.displayName = "TablerArmchairIcon";
}
