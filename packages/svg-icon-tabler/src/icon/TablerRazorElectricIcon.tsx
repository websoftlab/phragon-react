import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRazorElectricIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRazorElectricIcon = React.forwardRef<SVGSVGElement, TablerRazorElectricIconProps>(
	function TablerRazorElectricIcon(props, ref) {
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
				<path d="M8 3v2" />
				<path d="M12 3v2" />
				<path d="M16 3v2" />
				<path d="M9 12v6a3 3 0 0 0 6 0v-6h-6z" />
				<path d="M8 5h8l-1 4h-6z" />
				<path d="M12 17v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRazorElectricIcon.displayName = "TablerRazorElectricIcon";
}
