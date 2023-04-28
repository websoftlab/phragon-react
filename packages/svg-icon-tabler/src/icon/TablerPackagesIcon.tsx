import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPackagesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPackagesIcon = React.forwardRef<SVGSVGElement, TablerPackagesIconProps>(function TablerPackagesIcon(
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
			<path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
			<path d="M2 13.5v5.5l5 3" />
			<path d="M7 16.545l5 -3.03" />
			<path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
			<path d="M12 19l5 3" />
			<path d="M17 16.5l5 -3" />
			<path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />
			<path d="M7 5.03v5.455" />
			<path d="M12 8l5 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPackagesIcon.displayName = "TablerPackagesIcon";
}
