import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRefreshIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRefreshIcon = React.forwardRef<SVGSVGElement, TablerRefreshIconProps>(function TablerRefreshIcon(
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
			<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
			<path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRefreshIcon.displayName = "TablerRefreshIcon";
}
