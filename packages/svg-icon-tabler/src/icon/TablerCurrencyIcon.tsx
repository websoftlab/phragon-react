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
			<path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			<path d="M4 4l3 3" />
			<path d="M20 4l-3 3" />
			<path d="M4 20l3 -3" />
			<path d="M20 20l-3 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCurrencyIcon.displayName = "TablerCurrencyIcon";
}
