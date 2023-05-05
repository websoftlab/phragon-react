import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBellOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBellOffIcon = React.forwardRef<SVGSVGElement, TablerBellOffIconProps>(function TablerBellOffIcon(
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
			<path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" />
			<path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" />
			<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
			<path d="m2 2 20 20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBellOffIcon.displayName = "TablerBellOffIcon";
}
