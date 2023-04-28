import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrightnessDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrightnessDownIcon = React.forwardRef<SVGSVGElement, TablerBrightnessDownIconProps>(
	function TablerBrightnessDownIcon(props, ref) {
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
				<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M12 5l0 .01" />
				<path d="M17 7l0 .01" />
				<path d="M19 12l0 .01" />
				<path d="M17 17l0 .01" />
				<path d="M12 19l0 .01" />
				<path d="M7 17l0 .01" />
				<path d="M5 12l0 .01" />
				<path d="M7 7l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrightnessDownIcon.displayName = "TablerBrightnessDownIcon";
}
