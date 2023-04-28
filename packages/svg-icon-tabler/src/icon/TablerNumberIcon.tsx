import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNumberIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNumberIcon = React.forwardRef<SVGSVGElement, TablerNumberIconProps>(function TablerNumberIcon(
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
			<path d="M4 17v-10l7 10v-10" />
			<path d="M15 17h5" />
			<path d="M17.5 10m-2.5 0a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNumberIcon.displayName = "TablerNumberIcon";
}
