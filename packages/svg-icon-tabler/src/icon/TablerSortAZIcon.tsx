import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSortAZIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSortAZIcon = React.forwardRef<SVGSVGElement, TablerSortAZIconProps>(function TablerSortAZIcon(
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
			<path d="M16 8h4l-4 8h4" />
			<path d="M4 16v-6a2 2 0 1 1 4 0v6" />
			<path d="M4 13h4" />
			<path d="M11 12h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSortAZIcon.displayName = "TablerSortAZIcon";
}
