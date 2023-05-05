import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBellDotIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBellDotIcon = React.forwardRef<SVGSVGElement, TablerBellDotIconProps>(function TablerBellDotIcon(
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
			<path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" />
			<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
			<path d="M21 8 A3 3 0 0 1 18 11 A3 3 0 0 1 15 8 A3 3 0 0 1 21 8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBellDotIcon.displayName = "TablerBellDotIcon";
}
