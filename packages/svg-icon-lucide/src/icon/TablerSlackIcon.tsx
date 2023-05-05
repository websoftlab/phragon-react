import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSlackIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSlackIcon = React.forwardRef<SVGSVGElement, TablerSlackIconProps>(function TablerSlackIcon(
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
			<path d="M14.5 2 H14.5 A1.5 1.5 0 0 1 16 3.5 V8.5 A1.5 1.5 0 0 1 14.5 10 H14.5 A1.5 1.5 0 0 1 13 8.5 V3.5 A1.5 1.5 0 0 1 14.5 2 z" />
			<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
			<path d="M9.5 14 H9.5 A1.5 1.5 0 0 1 11 15.5 V20.5 A1.5 1.5 0 0 1 9.5 22 H9.5 A1.5 1.5 0 0 1 8 20.5 V15.5 A1.5 1.5 0 0 1 9.5 14 z" />
			<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
			<path d="M15.5 13 H20.5 A1.5 1.5 0 0 1 22 14.5 V14.5 A1.5 1.5 0 0 1 20.5 16 H15.5 A1.5 1.5 0 0 1 14 14.5 V14.5 A1.5 1.5 0 0 1 15.5 13 z" />
			<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
			<path d="M3.5 8 H8.5 A1.5 1.5 0 0 1 10 9.5 V9.5 A1.5 1.5 0 0 1 8.5 11 H3.5 A1.5 1.5 0 0 1 2 9.5 V9.5 A1.5 1.5 0 0 1 3.5 8 z" />
			<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSlackIcon.displayName = "TablerSlackIcon";
}
