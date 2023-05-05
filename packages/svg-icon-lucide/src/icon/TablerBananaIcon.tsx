import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBananaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBananaIcon = React.forwardRef<SVGSVGElement, TablerBananaIconProps>(function TablerBananaIcon(
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
			<path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" />
			<path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBananaIcon.displayName = "TablerBananaIcon";
}
