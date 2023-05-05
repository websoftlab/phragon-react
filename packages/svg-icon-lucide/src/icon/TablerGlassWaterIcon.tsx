import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGlassWaterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGlassWaterIcon = React.forwardRef<SVGSVGElement, TablerGlassWaterIconProps>(
	function TablerGlassWaterIcon(props, ref) {
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
				<path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
				<path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGlassWaterIcon.displayName = "TablerGlassWaterIcon";
}
