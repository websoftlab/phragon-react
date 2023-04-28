import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVaccineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVaccineIcon = React.forwardRef<SVGSVGElement, TablerVaccineIconProps>(function TablerVaccineIcon(
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
			<path d="M17 3l4 4" />
			<path d="M19 5l-4.5 4.5" />
			<path d="M11.5 6.5l6 6" />
			<path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />
			<path d="M7.5 12.5l1.5 1.5" />
			<path d="M10.5 9.5l1.5 1.5" />
			<path d="M3 21l3 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVaccineIcon.displayName = "TablerVaccineIcon";
}
