import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBellBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBellBoltIcon = React.forwardRef<SVGSVGElement, TablerBellBoltIconProps>(function TablerBellBoltIcon(
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
			<path d="M13.5 17h-9.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1" />
			<path d="M9 17v1a3 3 0 0 0 4.368 2.67" />
			<path d="M19 16l-2 3h4l-2 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBellBoltIcon.displayName = "TablerBellBoltIcon";
}
