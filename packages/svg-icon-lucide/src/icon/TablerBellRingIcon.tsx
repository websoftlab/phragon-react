import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBellRingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBellRingIcon = React.forwardRef<SVGSVGElement, TablerBellRingIconProps>(function TablerBellRingIcon(
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
			<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
			<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
			<path d="M4 2C2.8 3.7 2 5.7 2 8" />
			<path d="M22 8c0-2.3-.8-4.3-2-6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBellRingIcon.displayName = "TablerBellRingIcon";
}
