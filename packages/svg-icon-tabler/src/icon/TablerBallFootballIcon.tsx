import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBallFootballIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBallFootballIcon = React.forwardRef<SVGSVGElement, TablerBallFootballIconProps>(
	function TablerBallFootballIcon(props, ref) {
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
				<path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" />
				<path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBallFootballIcon.displayName = "TablerBallFootballIcon";
}
