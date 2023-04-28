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
			<path d="M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255" />
			<path d="M5 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M5 17c0 1.42 .316 2.805 1 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLassoIcon.displayName = "TablerLassoIcon";
}
