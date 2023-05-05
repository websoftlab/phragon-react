import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileScanIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileScanIcon = React.forwardRef<SVGSVGElement, TablerFileScanIconProps>(function TablerFileScanIcon(
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
			<path d="M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5" />
			<path d="M14 2 L14 8 L20 8" />
			<path d="M16 22a2 2 0 0 1-2-2" />
			<path d="M20 22a2 2 0 0 0 2-2" />
			<path d="M20 14a2 2 0 0 1 2 2" />
			<path d="M16 14a2 2 0 0 0-2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileScanIcon.displayName = "TablerFileScanIcon";
}
