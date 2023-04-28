import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRunIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRunIcon = React.forwardRef<SVGSVGElement, TablerRunIconProps>(function TablerRunIcon(props, ref) {
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
			<path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M4 17l5 1l.75 -1.5" />
			<path d="M15 21l0 -4l-4 -3l1 -6" />
			<path d="M7 12l0 -3l5 -1l3 3l3 1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRunIcon.displayName = "TablerRunIcon";
}
