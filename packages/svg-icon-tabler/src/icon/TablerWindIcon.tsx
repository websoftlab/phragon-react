import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWindIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWindIcon = React.forwardRef<SVGSVGElement, TablerWindIconProps>(function TablerWindIcon(props, ref) {
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
			<path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
			<path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
			<path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWindIcon.displayName = "TablerWindIcon";
}
