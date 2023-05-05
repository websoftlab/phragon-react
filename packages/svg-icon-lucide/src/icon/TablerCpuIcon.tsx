import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCpuIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCpuIcon = React.forwardRef<SVGSVGElement, TablerCpuIconProps>(function TablerCpuIcon(props, ref) {
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
			<path d="M6 4 H18 A2 2 0 0 1 20 6 V18 A2 2 0 0 1 18 20 H6 A2 2 0 0 1 4 18 V6 A2 2 0 0 1 6 4 z" />
			<path d="M9 9 H15 V15 H9 V9 z" />
			<path d="M15 2v2" />
			<path d="M15 20v2" />
			<path d="M2 15h2" />
			<path d="M2 9h2" />
			<path d="M20 15h2" />
			<path d="M20 9h2" />
			<path d="M9 2v2" />
			<path d="M9 20v2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCpuIcon.displayName = "TablerCpuIcon";
}
