import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMinimizeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMinimizeIcon = React.forwardRef<SVGSVGElement, TablerMinimizeIconProps>(function TablerMinimizeIcon(
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
			<path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
			<path d="M15 5v2a2 2 0 0 0 2 2h2" />
			<path d="M5 15h2a2 2 0 0 1 2 2v2" />
			<path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMinimizeIcon.displayName = "TablerMinimizeIcon";
}
