import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCherryIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCherryIcon = React.forwardRef<SVGSVGElement, TablerCherryIconProps>(function TablerCherryIcon(
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
			<path d="M7.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
			<path d="M17 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M9 13c.366 -2 1.866 -3.873 4.5 -5.6" />
			<path d="M17 15c-1.333 -2.333 -2.333 -5.333 -1 -9" />
			<path d="M5 6c3.667 -2.667 7.333 -2.667 11 0c-3.667 2.667 -7.333 2.667 -11 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCherryIcon.displayName = "TablerCherryIcon";
}
