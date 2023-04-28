import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNumbersIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNumbersIcon = React.forwardRef<SVGSVGElement, TablerNumbersIconProps>(function TablerNumbersIcon(
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
			<path d="M8 10v-7l-2 2" />
			<path d="M6 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3h4" />
			<path d="M15 14a2 2 0 1 0 2 -2a2 2 0 1 0 -2 -2" />
			<path d="M6.5 10h3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNumbersIcon.displayName = "TablerNumbersIcon";
}
