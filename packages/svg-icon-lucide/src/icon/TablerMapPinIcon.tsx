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
			<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
			<path d="M15 10 A3 3 0 0 1 12 13 A3 3 0 0 1 9 10 A3 3 0 0 1 15 10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMapPinIcon.displayName = "TablerMapPinIcon";
}
