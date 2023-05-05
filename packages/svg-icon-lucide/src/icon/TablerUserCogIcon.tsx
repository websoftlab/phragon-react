import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUserCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUserCogIcon = React.forwardRef<SVGSVGElement, TablerUserCogIconProps>(function TablerUserCogIcon(
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
			<path d="M21 11 A2 2 0 0 1 19 13 A2 2 0 0 1 17 11 A2 2 0 0 1 21 11" />
			<path d="M19 8v1" />
			<path d="M19 13v1" />
			<path d="m21.6 9.5-.87.5" />
			<path d="m17.27 12-.87.5" />
			<path d="m21.6 12.5-.87-.5" />
			<path d="m17.27 10-.87-.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUserCogIcon.displayName = "TablerUserCogIcon";
}
