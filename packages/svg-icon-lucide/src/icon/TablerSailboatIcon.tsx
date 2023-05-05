import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSailboatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSailboatIcon = React.forwardRef<SVGSVGElement, TablerSailboatIconProps>(function TablerSailboatIcon(
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
			<path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
			<path d="M21 14 10 2 3 14h18Z" />
			<path d="M10 2v16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSailboatIcon.displayName = "TablerSailboatIcon";
}
