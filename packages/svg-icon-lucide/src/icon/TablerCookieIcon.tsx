import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCookieIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCookieIcon = React.forwardRef<SVGSVGElement, TablerCookieIconProps>(function TablerCookieIcon(
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
			<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
			<path d="M8.5 8.5v.01" />
			<path d="M16 15.5v.01" />
			<path d="M12 12v.01" />
			<path d="M11 17v.01" />
			<path d="M7 14v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCookieIcon.displayName = "TablerCookieIcon";
}
