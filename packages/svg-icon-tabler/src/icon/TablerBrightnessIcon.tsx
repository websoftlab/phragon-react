import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrightnessIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrightnessIcon = React.forwardRef<SVGSVGElement, TablerBrightnessIconProps>(
	function TablerBrightnessIcon(props, ref) {
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
				<path d="M12 3l0 18" />
				<path d="M12 9l4.65 -4.65" />
				<path d="M12 14.3l7.37 -7.37" />
				<path d="M12 19.6l8.85 -8.85" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrightnessIcon.displayName = "TablerBrightnessIcon";
}
