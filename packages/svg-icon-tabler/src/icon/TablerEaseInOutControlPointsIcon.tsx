import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEaseInOutControlPointsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEaseInOutControlPointsIcon = React.forwardRef<SVGSVGElement, TablerEaseInOutControlPointsIconProps>(
	function TablerEaseInOutControlPointsIcon(props, ref) {
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
				<path d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" />
				<path d="M17 20h-2" />
				<path d="M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
				<path d="M7 4h2" />
				<path d="M14 4h-2" />
				<path d="M12 20h-2" />
				<path d="M3 20c8 0 10 -16 18 -16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEaseInOutControlPointsIcon.displayName = "TablerEaseInOutControlPointsIcon";
}
