import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMap2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMap2Icon = React.forwardRef<SVGSVGElement, TablerMap2IconProps>(function TablerMap2Icon(props, ref) {
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
			<path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
			<path d="M9 4v13" />
			<path d="M15 7v5.5" />
			<path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
			<path d="M19 18v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMap2Icon.displayName = "TablerMap2Icon";
}
