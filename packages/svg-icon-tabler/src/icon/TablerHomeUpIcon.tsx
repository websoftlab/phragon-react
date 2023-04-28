import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeUpIcon = React.forwardRef<SVGSVGElement, TablerHomeUpIconProps>(function TablerHomeUpIcon(
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
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771" />
			<path d="M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h6.344" />
			<path d="M19 22v-6" />
			<path d="M22 19l-3 -3l-3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHomeUpIcon.displayName = "TablerHomeUpIcon";
}
