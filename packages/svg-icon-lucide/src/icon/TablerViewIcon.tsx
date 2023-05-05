import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerViewIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerViewIcon = React.forwardRef<SVGSVGElement, TablerViewIconProps>(function TablerViewIcon(props, ref) {
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
			<path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
			<path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
			<path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
			<path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerViewIcon.displayName = "TablerViewIcon";
}
