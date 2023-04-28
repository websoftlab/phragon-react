import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockStopIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockStopIcon = React.forwardRef<SVGSVGElement, TablerClockStopIconProps>(
	function TablerClockStopIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 0 -9 9" />
				<path d="M12 7v5l1 1" />
				<path d="M16 16h6v6h-6z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockStopIcon.displayName = "TablerClockStopIcon";
}
