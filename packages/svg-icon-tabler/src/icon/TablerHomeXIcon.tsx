import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeXIcon = React.forwardRef<SVGSVGElement, TablerHomeXIconProps>(function TablerHomeXIcon(
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
			<path d="M19 13.4v-1.4h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2c.402 0 .777 .119 1.091 .323" />
			<path d="M21.5 21.5l-5 -5" />
			<path d="M16.5 21.5l5 -5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHomeXIcon.displayName = "TablerHomeXIcon";
}
