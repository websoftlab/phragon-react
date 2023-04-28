import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShape3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShape3Icon = React.forwardRef<SVGSVGElement, TablerShape3IconProps>(function TablerShape3Icon(
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
			<path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 5h10m-12 2v10m14 -10v10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShape3Icon.displayName = "TablerShape3Icon";
}
