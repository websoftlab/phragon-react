import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRoute2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRoute2Icon = React.forwardRef<SVGSVGElement, TablerRoute2IconProps>(function TablerRoute2Icon(
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
			<path d="M3 17l4 4" />
			<path d="M7 17l-4 4" />
			<path d="M17 3l4 4" />
			<path d="M21 3l-4 4" />
			<path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRoute2Icon.displayName = "TablerRoute2Icon";
}
