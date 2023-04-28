import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrolleyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrolleyIcon = React.forwardRef<SVGSVGElement, TablerTrolleyIconProps>(function TablerTrolleyIcon(
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
			<path d="M11 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M6 16l3 2" />
			<path d="M12 17l8 -12" />
			<path d="M17 10l2 1" />
			<path d="M9.592 4.695l3.306 2.104a1.3 1.3 0 0 1 .396 1.8l-3.094 4.811a1.3 1.3 0 0 1 -1.792 .394l-3.306 -2.104a1.3 1.3 0 0 1 -.396 -1.8l3.094 -4.81a1.3 1.3 0 0 1 1.792 -.394z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTrolleyIcon.displayName = "TablerTrolleyIcon";
}
