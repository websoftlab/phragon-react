import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockPauseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockPauseIcon = React.forwardRef<SVGSVGElement, TablerClockPauseIconProps>(
	function TablerClockPauseIcon(props, ref) {
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
				<path d="M20.942 13.018a9 9 0 1 0 -7.909 7.922" />
				<path d="M12 7v5l2 2" />
				<path d="M17 17v5" />
				<path d="M21 17v5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockPauseIcon.displayName = "TablerClockPauseIcon";
}
