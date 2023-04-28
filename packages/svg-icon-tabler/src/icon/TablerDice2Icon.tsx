import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDice2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDice2Icon = React.forwardRef<SVGSVGElement, TablerDice2IconProps>(function TablerDice2Icon(
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
			<path d="M9,9.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M14,14.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDice2Icon.displayName = "TablerDice2Icon";
}
