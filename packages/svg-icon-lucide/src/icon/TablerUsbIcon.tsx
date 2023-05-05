import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUsbIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUsbIcon = React.forwardRef<SVGSVGElement, TablerUsbIconProps>(function TablerUsbIcon(props, ref) {
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
			<path d="M11 7 A1 1 0 0 1 10 8 A1 1 0 0 1 9 7 A1 1 0 0 1 11 7" />
			<path d="M5 20 A1 1 0 0 1 4 21 A1 1 0 0 1 3 20 A1 1 0 0 1 5 20" />
			<path d="M4.7 19.3 19 5" />
			<path d="m21 3-3 1 2 2Z" />
			<path d="M9.26 7.68 5 12l2 5" />
			<path d="m10 14 5 2 3.5-3.5" />
			<path d="m18 12 1-1 1 1-1 1Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUsbIcon.displayName = "TablerUsbIcon";
}
