import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlugIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlugIcon = React.forwardRef<SVGSVGElement, TablerPlugIconProps>(function TablerPlugIcon(props, ref) {
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
			<path d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z" />
			<path d="M4 20l3.5 -3.5" />
			<path d="M15 4l-3.5 3.5" />
			<path d="M20 9l-3.5 3.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPlugIcon.displayName = "TablerPlugIcon";
}
