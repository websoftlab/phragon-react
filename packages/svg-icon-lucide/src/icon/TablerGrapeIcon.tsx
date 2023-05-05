import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGrapeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGrapeIcon = React.forwardRef<SVGSVGElement, TablerGrapeIconProps>(function TablerGrapeIcon(
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
			<path d="M22 5V2l-5.89 5.89" />
			<path d="M19.6 15.89 A3 3 0 0 1 16.6 18.89 A3 3 0 0 1 13.600000000000001 15.89 A3 3 0 0 1 19.6 15.89" />
			<path d="M11.11 7.4 A3 3 0 0 1 8.11 10.4 A3 3 0 0 1 5.109999999999999 7.4 A3 3 0 0 1 11.11 7.4" />
			<path d="M15.35 11.65 A3 3 0 0 1 12.35 14.65 A3 3 0 0 1 9.35 11.65 A3 3 0 0 1 15.35 11.65" />
			<path d="M16.91 5.85 A3 3 0 0 1 13.91 8.85 A3 3 0 0 1 10.91 5.85 A3 3 0 0 1 16.91 5.85" />
			<path d="M21.15 10.09 A3 3 0 0 1 18.15 13.09 A3 3 0 0 1 15.149999999999999 10.09 A3 3 0 0 1 21.15 10.09" />
			<path d="M9.559999999999999 13.2 A3 3 0 0 1 6.56 16.2 A3 3 0 0 1 3.5599999999999996 13.2 A3 3 0 0 1 9.559999999999999 13.2" />
			<path d="M13.8 17.44 A3 3 0 0 1 10.8 20.44 A3 3 0 0 1 7.800000000000001 17.44 A3 3 0 0 1 13.8 17.44" />
			<path d="M8 19 A3 3 0 0 1 5 22 A3 3 0 0 1 2 19 A3 3 0 0 1 8 19" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGrapeIcon.displayName = "TablerGrapeIcon";
}
