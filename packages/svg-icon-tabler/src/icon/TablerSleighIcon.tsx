import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSleighIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSleighIcon = React.forwardRef<SVGSVGElement, TablerSleighIconProps>(function TablerSleighIcon(
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
			<path d="M3 19h15a4 4 0 0 0 4 -4" />
			<path d="M16 15h-9a4 4 0 0 1 -4 -4v-6l1.243 1.243a6 6 0 0 0 4.242 1.757h3.515v2a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5 -1.5a1.5 1.5 0 0 1 3 0v1.5a3 3 0 0 1 -3 3z" />
			<path d="M15 15v4" />
			<path d="M7 15v4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSleighIcon.displayName = "TablerSleighIcon";
}
