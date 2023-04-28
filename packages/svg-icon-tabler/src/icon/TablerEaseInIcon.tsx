import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEaseInIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEaseInIcon = React.forwardRef<SVGSVGElement, TablerEaseInIconProps>(function TablerEaseInIcon(
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
			<path d="M3 20c8 0 18 -16 18 -16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEaseInIcon.displayName = "TablerEaseInIcon";
}
