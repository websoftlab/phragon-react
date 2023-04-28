import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSeoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSeoIcon = React.forwardRef<SVGSVGElement, TablerSeoIconProps>(function TablerSeoIcon(props, ref) {
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
			<path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" />
			<path d="M14 16h-4v-8h4" />
			<path d="M11 12h2" />
			<path d="M17 8m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSeoIcon.displayName = "TablerSeoIcon";
}
