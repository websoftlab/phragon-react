import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTreesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTreesIcon = React.forwardRef<SVGSVGElement, TablerTreesIconProps>(function TablerTreesIcon(
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
			<path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9" />
			<path d="M15 21l0 -3" />
			<path d="M8 13l-2 -2" />
			<path d="M8 12l2 -2" />
			<path d="M8 21v-13" />
			<path d="M5.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTreesIcon.displayName = "TablerTreesIcon";
}
