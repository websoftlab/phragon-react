import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCoinEuroIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCoinEuroIcon = React.forwardRef<SVGSVGElement, TablerCoinEuroIconProps>(function TablerCoinEuroIcon(
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M14.401 8c-.669 -.628 -1.5 -1 -2.401 -1c-2.21 0 -4 2.239 -4 5s1.79 5 4 5c.9 0 1.731 -.372 2.4 -1" />
			<path d="M7 10.5h4" />
			<path d="M7 13.5h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCoinEuroIcon.displayName = "TablerCoinEuroIcon";
}
