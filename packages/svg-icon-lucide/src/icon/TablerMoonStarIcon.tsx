import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoonStarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoonStarIcon = React.forwardRef<SVGSVGElement, TablerMoonStarIconProps>(function TablerMoonStarIcon(
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
			<path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z" />
			<path d="M19 3v4" />
			<path d="M21 5h-4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoonStarIcon.displayName = "TablerMoonStarIcon";
}
