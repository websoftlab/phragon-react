import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerActivityIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerActivityIcon = React.forwardRef<SVGSVGElement, TablerActivityIconProps>(function TablerActivityIcon(
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
			<path d="M3 12h4l3 8l4 -16l3 8h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerActivityIcon.displayName = "TablerActivityIcon";
}
