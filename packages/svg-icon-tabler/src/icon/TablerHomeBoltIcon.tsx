import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeBoltIcon = React.forwardRef<SVGSVGElement, TablerHomeBoltIconProps>(function TablerHomeBoltIcon(
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
			<path d="M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h7.5" />
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2c.661 0 1.248 .32 1.612 .815" />
			<path d="M19 14l-2 4h4l-2 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHomeBoltIcon.displayName = "TablerHomeBoltIcon";
}
