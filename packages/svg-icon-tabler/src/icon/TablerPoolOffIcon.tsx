import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPoolOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPoolOffIcon = React.forwardRef<SVGSVGElement, TablerPoolOffIconProps>(function TablerPoolOffIcon(
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
			<path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.303 0 .6 -.045 .876 -.146" />
			<path d="M2 16a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1.13 -.856m5.727 1.717a2.4 2.4 0 0 0 1.143 -.861" />
			<path d="M15 11v-6.5a1.5 1.5 0 0 1 3 0" />
			<path d="M9 12v-3m0 -4v-.5a1.5 1.5 0 0 0 -1.936 -1.436" />
			<path d="M15 5h-6" />
			<path d="M9 10h1m4 0h1" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPoolOffIcon.displayName = "TablerPoolOffIcon";
}
