import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChromeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChromeIcon = React.forwardRef<SVGSVGElement, TablerChromeIconProps>(function TablerChromeIcon(
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
			<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
			<path d="M16 12 A4 4 0 0 1 12 16 A4 4 0 0 1 8 12 A4 4 0 0 1 16 12" />
			<path d="M21.17 8 L12 8" />
			<path d="M3.95 6.06 L8.54 14" />
			<path d="M10.88 21.94 L15.46 14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerChromeIcon.displayName = "TablerChromeIcon";
}
