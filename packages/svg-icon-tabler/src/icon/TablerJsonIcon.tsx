import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerJsonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerJsonIcon = React.forwardRef<SVGSVGElement, TablerJsonIconProps>(function TablerJsonIcon(props, ref) {
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
			<path d="M20 16v-8l3 8v-8" />
			<path d="M15 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
			<path d="M1 8h3v6.5a1.5 1.5 0 0 1 -3 0v-.5" />
			<path d="M7 15a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerJsonIcon.displayName = "TablerJsonIcon";
}
