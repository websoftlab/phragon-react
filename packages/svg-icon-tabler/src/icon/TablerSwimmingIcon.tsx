import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSwimmingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSwimmingIcon = React.forwardRef<SVGSVGElement, TablerSwimmingIconProps>(function TablerSwimmingIcon(
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
			<path d="M16 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M6 11l4 -2l3.5 3l-1.5 2" />
			<path d="M3 16.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSwimmingIcon.displayName = "TablerSwimmingIcon";
}
