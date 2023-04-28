import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingIcon = React.forwardRef<SVGSVGElement, TablerBuildingIconProps>(function TablerBuildingIcon(
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
			<path d="M3 21l18 0" />
			<path d="M9 8l1 0" />
			<path d="M9 12l1 0" />
			<path d="M9 16l1 0" />
			<path d="M14 8l1 0" />
			<path d="M14 12l1 0" />
			<path d="M14 16l1 0" />
			<path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBuildingIcon.displayName = "TablerBuildingIcon";
}
