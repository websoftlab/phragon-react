import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyIcon = React.forwardRef<SVGSVGElement, TablerCurrencyIconProps>(function TablerCurrencyIcon(
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
			<path d="M20 12 A8 8 0 0 1 12 20 A8 8 0 0 1 4 12 A8 8 0 0 1 20 12" />
			<path d="M3 3 L6 6" />
			<path d="M21 3 L18 6" />
			<path d="M3 21 L6 18" />
			<path d="M21 21 L18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCurrencyIcon.displayName = "TablerCurrencyIcon";
}
