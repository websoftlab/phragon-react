import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMapPinPinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMapPinPinIcon = React.forwardRef<SVGSVGElement, TablerMapPinPinIconProps>(
	function TablerMapPinPinIcon(props, ref) {
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
				<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
				<path d="M12.783 21.326a2 2 0 0 1 -2.196 -.426l-4.244 -4.243a8 8 0 1 1 13.657 -5.62" />
				<path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
				<path d="M19 18v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMapPinPinIcon.displayName = "TablerMapPinPinIcon";
}
