import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCarCrashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCarCrashIcon = React.forwardRef<SVGSVGElement, TablerCarCrashIconProps>(function TablerCarCrashIcon(
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
			<path d="M10 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-5m0 -6h8m-6 0v-5m2 0h-4" />
			<path d="M14 8v-2" />
			<path d="M19 12h2" />
			<path d="M17.5 15.5l1.5 1.5" />
			<path d="M17.5 8.5l1.5 -1.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCarCrashIcon.displayName = "TablerCarCrashIcon";
}
