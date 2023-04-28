import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDice6IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDice6Icon = React.forwardRef<SVGSVGElement, TablerDice6IconProps>(function TablerDice6Icon(
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
			<path d="M8,7.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M15,7.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M8,12a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M15,12a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M15,16.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M8,16.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDice6Icon.displayName = "TablerDice6Icon";
}
