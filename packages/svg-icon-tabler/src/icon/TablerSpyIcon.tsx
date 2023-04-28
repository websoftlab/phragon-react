import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSpyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSpyIcon = React.forwardRef<SVGSVGElement, TablerSpyIconProps>(function TablerSpyIcon(props, ref) {
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
			<path d="M3 11h18" />
			<path d="M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
			<path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M10 17h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSpyIcon.displayName = "TablerSpyIcon";
}
