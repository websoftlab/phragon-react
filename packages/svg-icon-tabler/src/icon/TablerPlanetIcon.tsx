import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlanetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlanetIcon = React.forwardRef<SVGSVGElement, TablerPlanetIconProps>(function TablerPlanetIcon(
	props,
	ref
) {
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
			<path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805" />
			<path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPlanetIcon.displayName = "TablerPlanetIcon";
}
