import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIconsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIconsOffIcon = React.forwardRef<SVGSVGElement, TablerIconsOffIconProps>(function TablerIconsOffIcon(
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
			<path d="M4.01 4.041a3.5 3.5 0 0 0 2.49 5.959c.975 0 1.865 -.357 2.5 -1m.958 -3.044a3.503 3.503 0 0 0 -2.905 -2.912" />
			<path d="M2.5 21h8l-4 -7z" />
			<path d="M14 3l7 7" />
			<path d="M14 10l7 -7" />
			<path d="M18 14h3v3m0 4h-7v-7" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerIconsOffIcon.displayName = "TablerIconsOffIcon";
}
