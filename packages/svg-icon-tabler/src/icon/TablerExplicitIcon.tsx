import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerExplicitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerExplicitIcon = React.forwardRef<SVGSVGElement, TablerExplicitIconProps>(function TablerExplicitIcon(
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
			<path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
			<path d="M14 8h-4v8h4" />
			<path d="M14 12h-4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerExplicitIcon.displayName = "TablerExplicitIcon";
}
