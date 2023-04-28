import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLeafOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLeafOffIcon = React.forwardRef<SVGSVGElement, TablerLeafOffIconProps>(function TablerLeafOffIcon(
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
			<path d="M5 21c.475 -4.27 2.3 -7.64 6.331 -9.683" />
			<path d="M6.618 6.623c-1.874 1.625 -2.625 3.877 -2.632 6.377c0 1 0 3 2 5h3.014c2.733 0 5.092 -.635 6.92 -2.087m1.899 -2.099c1.224 -1.872 1.987 -4.434 2.181 -7.814v-2h-4.014c-2.863 0 -5.118 .405 -6.861 1.118" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLeafOffIcon.displayName = "TablerLeafOffIcon";
}
