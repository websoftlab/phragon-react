import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBallAmericanFootballOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBallAmericanFootballOffIcon = React.forwardRef<
	SVGSVGElement,
	TablerBallAmericanFootballOffIconProps
>(function TablerBallAmericanFootballOffIcon(props, ref) {
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
			<path d="M15 9l-1 1m-2 2l-3 3" />
			<path d="M10 12l2 2" />
			<path d="M8 21a5 5 0 0 0 -5 -5" />
			<path d="M6.813 6.802a12.96 12.96 0 0 0 -3.813 9.198a5 5 0 0 0 5 5a12.96 12.96 0 0 0 9.186 -3.801m1.789 -2.227a12.94 12.94 0 0 0 2.025 -6.972a5 5 0 0 0 -5 -5a12.94 12.94 0 0 0 -6.967 2.022" />
			<path d="M16 3a5 5 0 0 0 5 5" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBallAmericanFootballOffIcon.displayName = "TablerBallAmericanFootballOffIcon";
}
