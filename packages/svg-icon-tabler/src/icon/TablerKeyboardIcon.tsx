import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerKeyboardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerKeyboardIcon = React.forwardRef<SVGSVGElement, TablerKeyboardIconProps>(function TablerKeyboardIcon(
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
			<path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
			<path d="M6 10l0 .01" />
			<path d="M10 10l0 .01" />
			<path d="M14 10l0 .01" />
			<path d="M18 10l0 .01" />
			<path d="M6 14l0 .01" />
			<path d="M18 14l0 .01" />
			<path d="M10 14l4 .01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerKeyboardIcon.displayName = "TablerKeyboardIcon";
}
