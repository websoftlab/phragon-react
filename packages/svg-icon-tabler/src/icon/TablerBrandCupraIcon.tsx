import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCupraIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCupraIcon = React.forwardRef<SVGSVGElement, TablerBrandCupraIconProps>(
	function TablerBrandCupraIcon(props, ref) {
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
				<path d="M4.5 10l-2.5 -4l15.298 6.909a.2 .2 0 0 1 .09 .283l-3.388 5.808" />
				<path d="M10 19l-3.388 -5.808a.2 .2 0 0 1 .09 -.283l15.298 -6.909l-2.5 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCupraIcon.displayName = "TablerBrandCupraIcon";
}
