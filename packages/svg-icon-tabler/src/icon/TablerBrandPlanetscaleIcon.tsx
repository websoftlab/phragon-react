import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandPlanetscaleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandPlanetscaleIcon = React.forwardRef<SVGSVGElement, TablerBrandPlanetscaleIconProps>(
	function TablerBrandPlanetscaleIcon(props, ref) {
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
				<path d="M20.993 11.63a9 9 0 0 1 -9.362 9.362l9.362 -9.362z" />
				<path d="M12 3a9.001 9.001 0 0 1 8.166 5.211l-11.955 11.955a9 9 0 0 1 3.789 -17.166z" />
				<path d="M12 12l-6 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandPlanetscaleIcon.displayName = "TablerBrandPlanetscaleIcon";
}
