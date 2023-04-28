import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareF7IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareF7Icon = React.forwardRef<SVGSVGElement, TablerSquareF7IconProps>(function TablerSquareF7Icon(
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
			<path d="M13 9h3l-1.5 6" />
			<path d="M8 12h2" />
			<path d="M10 9h-2v6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSquareF7Icon.displayName = "TablerSquareF7Icon";
}
