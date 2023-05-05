import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCitrusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCitrusIcon = React.forwardRef<SVGSVGElement, TablerCitrusIconProps>(function TablerCitrusIcon(
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
			<path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
			<path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
			<path d="m14 10-5.5 5.5" />
			<path d="M14 17.85V10H6.15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCitrusIcon.displayName = "TablerCitrusIcon";
}
