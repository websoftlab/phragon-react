import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMapPinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMapPinIcon = React.forwardRef<SVGSVGElement, TablerMapPinIconProps>(function TablerMapPinIcon(
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
			<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
			<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMapPinIcon.displayName = "TablerMapPinIcon";
}
