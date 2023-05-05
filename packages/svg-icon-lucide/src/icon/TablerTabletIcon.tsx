import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTabletIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTabletIcon = React.forwardRef<SVGSVGElement, TablerTabletIconProps>(function TablerTabletIcon(
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
			<path d="M6 2 H18 A2 2 0 0 1 20 4 V20 A2 2 0 0 1 18 22 H6 A2 2 0 0 1 4 20 V4 A2 2 0 0 1 6 2 z" />
			<path d="M12 18 L12.01 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTabletIcon.displayName = "TablerTabletIcon";
}
