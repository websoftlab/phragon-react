import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEarOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEarOffIcon = React.forwardRef<SVGSVGElement, TablerEarOffIconProps>(function TablerEarOffIcon(
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
			<path d="M6 10c0 -1.146 .277 -2.245 .78 -3.219m1.792 -2.208a7 7 0 0 1 10.428 9.027a10 10 0 0 1 -.633 .762m-2.045 1.96a8 8 0 0 0 -1.322 2.278a4.5 4.5 0 0 1 -6.8 1.4" />
			<path d="M11.42 7.414a3 3 0 0 1 4.131 4.13" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEarOffIcon.displayName = "TablerEarOffIcon";
}
