import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerManualGearboxIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerManualGearboxIcon = React.forwardRef<SVGSVGElement, TablerManualGearboxIconProps>(
	function TablerManualGearboxIcon(props, ref) {
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
				<path d="M5 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M12 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 8l0 8" />
				<path d="M12 8l0 8" />
				<path d="M19 8v2a2 2 0 0 1 -2 2h-12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerManualGearboxIcon.displayName = "TablerManualGearboxIcon";
}
