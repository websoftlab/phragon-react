import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSwordOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSwordOffIcon = React.forwardRef<SVGSVGElement, TablerSwordOffIconProps>(function TablerSwordOffIcon(
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
			<path d="M11.938 7.937l3.062 -3.937h5v5l-3.928 3.055m-2.259 1.757l-2.813 2.188l-4 4l-3 -3l4 -4l2.19 -2.815" />
			<path d="M6.5 11.5l6 6" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSwordOffIcon.displayName = "TablerSwordOffIcon";
}
