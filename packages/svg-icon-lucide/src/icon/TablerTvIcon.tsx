import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTvIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTvIcon = React.forwardRef<SVGSVGElement, TablerTvIconProps>(function TablerTvIcon(props, ref) {
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
			<path d="M4 7 H20 A2 2 0 0 1 22 9 V20 A2 2 0 0 1 20 22 H4 A2 2 0 0 1 2 20 V9 A2 2 0 0 1 4 7 z" />
			<path d="M17 2 L12 7 L7 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTvIcon.displayName = "TablerTvIcon";
}
