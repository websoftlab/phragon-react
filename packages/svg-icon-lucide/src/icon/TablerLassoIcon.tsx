import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLassoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLassoIcon = React.forwardRef<SVGSVGElement, TablerLassoIconProps>(function TablerLassoIcon(
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
			<path d="M7 22a5 5 0 0 1-2-4" />
			<path d="M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1" />
			<path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLassoIcon.displayName = "TablerLassoIcon";
}
