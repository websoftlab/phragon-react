import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWindOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWindOffIcon = React.forwardRef<SVGSVGElement, TablerWindOffIconProps>(function TablerWindOffIcon(
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
			<path d="M5 8h3m4 0h1.5a2.5 2.5 0 1 0 -2.34 -3.24" />
			<path d="M3 12h9" />
			<path d="M16 12h2.5a2.5 2.5 0 0 1 1.801 4.282" />
			<path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWindOffIcon.displayName = "TablerWindOffIcon";
}
