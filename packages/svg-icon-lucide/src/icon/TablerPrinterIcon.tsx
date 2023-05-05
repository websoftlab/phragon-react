import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPrinterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPrinterIcon = React.forwardRef<SVGSVGElement, TablerPrinterIconProps>(function TablerPrinterIcon(
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
			<path d="M6 9 L6 2 L18 2 L18 9" />
			<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
			<path d="M6 14 H18 V22 H6 V14 z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPrinterIcon.displayName = "TablerPrinterIcon";
}
