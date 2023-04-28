import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBallAmericanFootballIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBallAmericanFootballIcon = React.forwardRef<SVGSVGElement, TablerBallAmericanFootballIconProps>(
	function TablerBallAmericanFootballIcon(props, ref) {
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
				<path d="M15 9l-6 6" />
				<path d="M10 12l2 2" />
				<path d="M12 10l2 2" />
				<path d="M8 21a5 5 0 0 0 -5 -5" />
				<path d="M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5" />
				<path d="M16 3a5 5 0 0 0 5 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBallAmericanFootballIcon.displayName = "TablerBallAmericanFootballIcon";
}
