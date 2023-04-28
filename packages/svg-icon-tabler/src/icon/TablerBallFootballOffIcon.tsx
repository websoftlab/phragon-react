import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBallFootballOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBallFootballOffIcon = React.forwardRef<SVGSVGElement, TablerBallFootballOffIconProps>(
	function TablerBallFootballOffIcon(props, ref) {
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
				<path d="M20.041 16.046a9 9 0 0 0 -12.084 -12.09m-2.323 1.683a9 9 0 0 0 12.726 12.73" />
				<path d="M12 7l4.755 3.455l-.566 1.743l-.98 3.014l-.209 .788h-6l-1.755 -5.545l1.86 -1.351l2.313 -1.681z" />
				<path d="M12 7v-4" />
				<path d="M15 16l2.5 3" />
				<path d="M16.755 10.455l3.745 -1.455" />
				<path d="M9.061 16.045l-2.561 2.955" />
				<path d="M7.245 10.455l-3.745 -1.455" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBallFootballOffIcon.displayName = "TablerBallFootballOffIcon";
}
