import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBathOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBathOffIcon = React.forwardRef<SVGSVGElement, TablerBathOffIconProps>(function TablerBathOffIcon(
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
			<path d="M16 12h4a1 1 0 0 1 1 1v3c0 .311 -.036 .614 -.103 .904m-1.61 2.378a3.982 3.982 0 0 1 -2.287 .718h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1h8" />
			<path d="M6 12v-6m1.178 -2.824c.252 -.113 .53 -.176 .822 -.176h3v2.25" />
			<path d="M4 21l1 -1.5" />
			<path d="M20 21l-1 -1.5" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBathOffIcon.displayName = "TablerBathOffIcon";
}
