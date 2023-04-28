import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBugOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBugOffIcon = React.forwardRef<SVGSVGElement, TablerBugOffIconProps>(function TablerBugOffIcon(
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
			<path d="M9.884 5.873a3 3 0 0 1 5.116 2.127v1" />
			<path d="M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5 5 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1" />
			<path d="M3 13h4" />
			<path d="M17 13h4" />
			<path d="M12 20v-6" />
			<path d="M4 19l3.35 -2" />
			<path d="M4 7l3.75 2.4" />
			<path d="M20 7l-3.75 2.4" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBugOffIcon.displayName = "TablerBugOffIcon";
}
