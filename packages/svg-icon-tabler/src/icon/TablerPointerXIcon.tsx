import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPointerXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPointerXIcon = React.forwardRef<SVGSVGElement, TablerPointerXIconProps>(function TablerPointerXIcon(
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
			<path d="M15.768 13.212l-.99 -.99l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l.908 .908" />
			<path d="M22 22l-5 -5" />
			<path d="M17 22l5 -5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPointerXIcon.displayName = "TablerPointerXIcon";
}
