import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBeerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBeerIcon = React.forwardRef<SVGSVGElement, TablerBeerIconProps>(function TablerBeerIcon(props, ref) {
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
			<path d="M17 11h1a3 3 0 0 1 0 6h-1" />
			<path d="M9 12v6" />
			<path d="M13 12v6" />
			<path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
			<path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBeerIcon.displayName = "TablerBeerIcon";
}
