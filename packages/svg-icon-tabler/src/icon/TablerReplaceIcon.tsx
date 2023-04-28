import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerReplaceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerReplaceIcon = React.forwardRef<SVGSVGElement, TablerReplaceIconProps>(function TablerReplaceIcon(
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
			<path d="M3 3m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
			<path d="M15 15m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
			<path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
			<path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerReplaceIcon.displayName = "TablerReplaceIcon";
}
