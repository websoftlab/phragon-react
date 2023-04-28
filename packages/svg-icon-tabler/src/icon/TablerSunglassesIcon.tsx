import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunglassesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunglassesIcon = React.forwardRef<SVGSVGElement, TablerSunglassesIconProps>(
	function TablerSunglassesIcon(props, ref) {
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
				<path d="M8 4h-2l-3 10" />
				<path d="M16 4h2l3 10" />
				<path d="M10 16h4" />
				<path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
				<path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
				<path d="M4 14l4.5 4.5" />
				<path d="M15 14l4.5 4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSunglassesIcon.displayName = "TablerSunglassesIcon";
}
