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
			<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
			<path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
			<path d="M5 18v2" />
			<path d="M19 18v2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerArmchairIcon.displayName = "TablerArmchairIcon";
}
