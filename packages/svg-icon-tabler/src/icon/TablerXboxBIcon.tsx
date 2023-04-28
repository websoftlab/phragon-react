import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerXboxBIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerXboxBIcon = React.forwardRef<SVGSVGElement, TablerXboxBIconProps>(function TablerXboxBIcon(
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
			<path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
			<path d="M13 12a2 2 0 1 1 0 4h-3v-4" />
			<path d="M13 12h-3" />
			<path d="M13 12a2 2 0 1 0 0 -4h-3v4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerXboxBIcon.displayName = "TablerXboxBIcon";
}
