import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPizzaOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPizzaOffIcon = React.forwardRef<SVGSVGElement, TablerPizzaOffIconProps>(function TablerPizzaOffIcon(
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
			<path d="M10.313 6.277l1.687 -3.277l5.34 10.376m2.477 6.463a19.093 19.093 0 0 1 -7.817 1.661c-3.04 0 -5.952 -.714 -8.5 -1.983l5.434 -10.559" />
			<path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634c1.56 0 3.105 -.24 4.582 -.713" />
			<path d="M11 14v-.01" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPizzaOffIcon.displayName = "TablerPizzaOffIcon";
}
