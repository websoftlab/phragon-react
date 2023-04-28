import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrightnessOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrightnessOffIcon = React.forwardRef<SVGSVGElement, TablerBrightnessOffIconProps>(
	function TablerBrightnessOffIcon(props, ref) {
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
				<path d="M12 3v5m0 4v9" />
				<path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
				<path d="M12.5 8.5l4.15 -4.15" />
				<path d="M12 14l1.025 -.983m2.065 -1.981l4.28 -4.106" />
				<path d="M12 19.6l3.79 -3.79m2 -2l3.054 -3.054" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrightnessOffIcon.displayName = "TablerBrightnessOffIcon";
}
