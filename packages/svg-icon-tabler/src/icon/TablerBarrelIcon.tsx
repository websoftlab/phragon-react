import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBarrelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBarrelIcon = React.forwardRef<SVGSVGElement, TablerBarrelIconProps>(function TablerBarrelIcon(
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
			<path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22c.958 2.26 1.437 4.52 1.437 6.78c0 2.26 -.479 4.52 -1.437 6.78a2 2 0 0 1 -1.841 1.22h-9.444a2 2 0 0 1 -1.841 -1.22c-.958 -2.26 -1.437 -4.52 -1.437 -6.78c0 -2.26 .479 -4.52 1.437 -6.78a2 2 0 0 1 1.841 -1.22z" />
			<path d="M14 4c.667 2.667 1 5.333 1 8s-.333 5.333 -1 8" />
			<path d="M10 4c-.667 2.667 -1 5.333 -1 8s.333 5.333 1 8" />
			<path d="M4.5 16h15" />
			<path d="M19.5 8h-15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBarrelIcon.displayName = "TablerBarrelIcon";
}
