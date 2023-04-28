import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlanetOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlanetOffIcon = React.forwardRef<SVGSVGElement, TablerPlanetOffIconProps>(
	function TablerPlanetOffIcon(props, ref) {
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
				<path d="M18.816 13.58c1.956 1.825 3.157 3.449 3.184 4.445m-3.428 .593c-2.098 -.634 -4.944 -2.03 -7.919 -3.976c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.32 -.628 1.591 -.6 3.294 -.113" />
				<path d="M7.042 7.059a7 7 0 0 0 9.908 9.89m1.581 -2.425a7 7 0 0 0 -9.057 -9.054" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlanetOffIcon.displayName = "TablerPlanetOffIcon";
}
