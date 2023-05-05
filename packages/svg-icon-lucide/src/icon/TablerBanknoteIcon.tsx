import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBanknoteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBanknoteIcon = React.forwardRef<SVGSVGElement, TablerBanknoteIconProps>(function TablerBanknoteIcon(
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
			<path d="M4 6 H20 A2 2 0 0 1 22 8 V16 A2 2 0 0 1 20 18 H4 A2 2 0 0 1 2 16 V8 A2 2 0 0 1 4 6 z" />
			<path d="M14 12 A2 2 0 0 1 12 14 A2 2 0 0 1 10 12 A2 2 0 0 1 14 12" />
			<path d="M6 12h.01M18 12h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBanknoteIcon.displayName = "TablerBanknoteIcon";
}
