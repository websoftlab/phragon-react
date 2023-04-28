import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerOldIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerOldIcon = React.forwardRef<SVGSVGElement, TablerOldIconProps>(function TablerOldIcon(props, ref) {
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
			<path d="M11 21l-1 -4l-2 -3v-6" />
			<path d="M5 14l-1 -3l4 -3l3 2l3 .5" />
			<path d="M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M7 17l-2 4" />
			<path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerOldIcon.displayName = "TablerOldIcon";
}
