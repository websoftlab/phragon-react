import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyDollarAustralianIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyDollarAustralianIcon = React.forwardRef<
	SVGSVGElement,
	TablerCurrencyDollarAustralianIconProps
>(function TablerCurrencyDollarAustralianIcon(props, ref) {
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
			<path d="M3 18l3.279 -11.476a.75 .75 0 0 1 1.442 0l3.279 11.476" />
			<path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" />
			<path d="M17 20v-2" />
			<path d="M18 6v-2" />
			<path d="M4.5 14h5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCurrencyDollarAustralianIcon.displayName = "TablerCurrencyDollarAustralianIcon";
}
