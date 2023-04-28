import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitVoltmeterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitVoltmeterIcon = React.forwardRef<SVGSVGElement, TablerCircuitVoltmeterIconProps>(
	function TablerCircuitVoltmeterIcon(props, ref) {
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
				<path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M5 12h-3" />
				<path d="M19 12h3" />
				<path d="M10 10l2 4l2 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitVoltmeterIcon.displayName = "TablerCircuitVoltmeterIcon";
}
