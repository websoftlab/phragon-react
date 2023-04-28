import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLoader3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLoader3Icon = React.forwardRef<SVGSVGElement, TablerLoader3IconProps>(function TablerLoader3Icon(
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
			<path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" />
			<path d="M17 12a5 5 0 1 0 -5 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLoader3Icon.displayName = "TablerLoader3Icon";
}
