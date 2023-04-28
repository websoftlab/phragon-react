import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerH6IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerH6Icon = React.forwardRef<SVGSVGElement, TablerH6IconProps>(function TablerH6Icon(props, ref) {
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
			<path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" />
			<path d="M21 12a2 2 0 1 0 -4 0v4" />
			<path d="M4 6v12" />
			<path d="M12 6v12" />
			<path d="M11 18h2" />
			<path d="M3 18h2" />
			<path d="M4 12h8" />
			<path d="M3 6h2" />
			<path d="M11 6h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerH6Icon.displayName = "TablerH6Icon";
}
