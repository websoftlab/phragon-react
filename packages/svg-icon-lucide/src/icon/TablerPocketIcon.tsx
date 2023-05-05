import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPocketIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPocketIcon = React.forwardRef<SVGSVGElement, TablerPocketIconProps>(function TablerPocketIcon(
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
			<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
			<path d="M8 10 L12 14 L16 10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPocketIcon.displayName = "TablerPocketIcon";
}
