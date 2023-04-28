import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGlobeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGlobeOffIcon = React.forwardRef<SVGSVGElement, TablerGlobeOffIconProps>(function TablerGlobeOffIcon(
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
			<path d="M8.36 8.339a4 4 0 0 0 5.281 5.31m2 -1.98a4 4 0 0 0 -5.262 -5.325" />
			<path d="M6.75 16a8.015 8.015 0 0 0 9.799 .553m2.016 -2a8.015 8.015 0 0 0 -2.565 -11.555" />
			<path d="M12 18v4" />
			<path d="M8 22h8" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGlobeOffIcon.displayName = "TablerGlobeOffIcon";
}
