import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandWixIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandWixIcon = React.forwardRef<SVGSVGElement, TablerBrandWixIconProps>(function TablerBrandWixIcon(
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
			<path d="M3 9l1.5 6l1.379 -5.515a.64 .64 0 0 1 1.242 0l1.379 5.515l1.5 -6" />
			<path d="M13 11.5v3.5" />
			<path d="M16 9l5 6" />
			<path d="M21 9l-5 6" />
			<path d="M13 9h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrandWixIcon.displayName = "TablerBrandWixIcon";
}
