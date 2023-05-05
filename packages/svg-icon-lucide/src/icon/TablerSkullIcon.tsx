import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSkullIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSkullIcon = React.forwardRef<SVGSVGElement, TablerSkullIconProps>(function TablerSkullIcon(
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
			<path d="M10 12 A1 1 0 0 1 9 13 A1 1 0 0 1 8 12 A1 1 0 0 1 10 12" />
			<path d="M16 12 A1 1 0 0 1 15 13 A1 1 0 0 1 14 12 A1 1 0 0 1 16 12" />
			<path d="M8 20v2h8v-2" />
			<path d="m12.5 17-.5-1-.5 1h1z" />
			<path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSkullIcon.displayName = "TablerSkullIcon";
}
