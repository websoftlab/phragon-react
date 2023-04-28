import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeHandIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeHandIcon = React.forwardRef<SVGSVGElement, TablerHomeHandIconProps>(function TablerHomeHandIcon(
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
			<path d="M18 9l-6 -6l-9 9h2v7a2 2 0 0 0 2 2h3.5" />
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2" />
			<path d="M16 17.5l-.585 -.578a1.516 1.516 0 0 0 -2 0c-.477 .433 -.551 1.112 -.177 1.622l1.762 2.456c.37 .506 1.331 1 2 1h3c1.009 0 1.497 -.683 1.622 -1.593c.252 -.938 .378 -1.74 .378 -2.407c0 -1 -.939 -1.843 -2 -2h-1v-2.636c0 -.754 -.672 -1.364 -1.5 -1.364s-1.5 .61 -1.5 1.364v4.136z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHomeHandIcon.displayName = "TablerHomeHandIcon";
}
