import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeIcon = React.forwardRef<SVGSVGElement, TablerHomeIconProps>(function TablerHomeIcon(props, ref) {
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
			<path d="M5 12l-2 0l9 -9l9 9l-2 0" />
			<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHomeIcon.displayName = "TablerHomeIcon";
}
