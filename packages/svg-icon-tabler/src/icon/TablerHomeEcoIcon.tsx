import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeEcoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeEcoIcon = React.forwardRef<SVGSVGElement, TablerHomeEcoIconProps>(function TablerHomeEcoIcon(
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
			<path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215" />
			<path d="M16 22s0 -2 3 -4" />
			<path d="M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHomeEcoIcon.displayName = "TablerHomeEcoIcon";
}
