import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBallBasketballIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBallBasketballIcon = React.forwardRef<SVGSVGElement, TablerBallBasketballIconProps>(
	function TablerBallBasketballIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M5.65 5.65l12.7 12.7" />
				<path d="M5.65 18.35l12.7 -12.7" />
				<path d="M12 3a9 9 0 0 0 9 9" />
				<path d="M3 12a9 9 0 0 1 9 9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBallBasketballIcon.displayName = "TablerBallBasketballIcon";
}
