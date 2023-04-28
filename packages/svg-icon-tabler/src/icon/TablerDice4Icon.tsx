import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDice4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDice4Icon = React.forwardRef<SVGSVGElement, TablerDice4IconProps>(function TablerDice4Icon(
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
			<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
			<path d="M8,8.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M15,8.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M15,15.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M8,15.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDice4Icon.displayName = "TablerDice4Icon";
}
