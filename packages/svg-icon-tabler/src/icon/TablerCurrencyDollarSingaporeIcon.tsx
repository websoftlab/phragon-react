import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyDollarSingaporeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyDollarSingaporeIcon = React.forwardRef<
	SVGSVGElement,
	TablerCurrencyDollarSingaporeIconProps
>(function TablerCurrencyDollarSingaporeIcon(props, ref) {
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
			<path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" />
			<path d="M10 6h-4a3 3 0 1 0 0 6h1a3 3 0 0 1 0 6h-4" />
			<path d="M17 20v-2" />
			<path d="M18 6v-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCurrencyDollarSingaporeIcon.displayName = "TablerCurrencyDollarSingaporeIcon";
}
