import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBellPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBellPlusIcon = React.forwardRef<SVGSVGElement, TablerBellPlusIconProps>(function TablerBellPlusIcon(
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
			<path d="M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7" />
			<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
			<path d="M15 8h6" />
			<path d="M18 5v6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBellPlusIcon.displayName = "TablerBellPlusIcon";
}
