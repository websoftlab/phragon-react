import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRegexOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRegexOffIcon = React.forwardRef<SVGSVGElement, TablerRegexOffIconProps>(function TablerRegexOffIcon(
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
			<path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z" />
			<path d="M17 7.875l3 -1.687" />
			<path d="M17 7.875v3.375" />
			<path d="M17 7.875l-3 -1.687" />
			<path d="M17 7.875l3 1.688" />
			<path d="M17 4.5v3.375" />
			<path d="M17 7.875l-3 1.688" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRegexOffIcon.displayName = "TablerRegexOffIcon";
}
