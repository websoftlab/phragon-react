import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTestPipeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTestPipeIcon = React.forwardRef<SVGSVGElement, TablerTestPipeIconProps>(function TablerTestPipeIcon(
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
			<path d="M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124" />
			<path d="M7 13h8" />
			<path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6z" />
			<path d="M15 3l6 6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTestPipeIcon.displayName = "TablerTestPipeIcon";
}
