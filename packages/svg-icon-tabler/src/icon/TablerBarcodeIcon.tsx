import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBarcodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBarcodeIcon = React.forwardRef<SVGSVGElement, TablerBarcodeIconProps>(function TablerBarcodeIcon(
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
			<path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
			<path d="M4 17v1a2 2 0 0 0 2 2h2" />
			<path d="M16 4h2a2 2 0 0 1 2 2v1" />
			<path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
			<path d="M5 11h1v2h-1z" />
			<path d="M10 11l0 2" />
			<path d="M14 11h1v2h-1z" />
			<path d="M19 11l0 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBarcodeIcon.displayName = "TablerBarcodeIcon";
}
