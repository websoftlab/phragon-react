import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUserPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUserPlusIcon = React.forwardRef<SVGSVGElement, TablerUserPlusIconProps>(function TablerUserPlusIcon(
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
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<path d="M13 7 A4 4 0 0 1 9 11 A4 4 0 0 1 5 7 A4 4 0 0 1 13 7" />
			<path d="M19 8 L19 14" />
			<path d="M22 11 L16 11" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUserPlusIcon.displayName = "TablerUserPlusIcon";
}
