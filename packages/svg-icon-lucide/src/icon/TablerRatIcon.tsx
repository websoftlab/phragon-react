import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRatIcon = React.forwardRef<SVGSVGElement, TablerRatIconProps>(function TablerRatIcon(props, ref) {
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
			<path d="M14 16.5v-.77a2.73 2.73 0 0 1 3.27-2.68l3.02.6a1.4 1.4 0 0 0 1.5-2.08l-1.63-2.8a3 3 0 1 0-3.35-4.82" />
			<path d="M16 9h-.01" />
			<path d="M17 5.12V5a3 3 0 1 0-5.24 2h-1A6.77 6.77 0 0 0 4 13.77C4 16.1 5.9 18 8.23 18H9" />
			<path d="M13 22H4a2 2 0 1 1 0-4h12" />
			<path d="M13.67 18c.21-.44.33-.94.33-1.45A3.65 3.65 0 0 0 10.26 13" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRatIcon.displayName = "TablerRatIcon";
}
