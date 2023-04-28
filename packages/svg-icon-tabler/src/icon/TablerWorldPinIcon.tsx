import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldPinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldPinIcon = React.forwardRef<SVGSVGElement, TablerWorldPinIconProps>(function TablerWorldPinIcon(
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
			<path d="M20.972 11.291a9 9 0 1 0 -8.322 9.686" />
			<path d="M3.6 9h16.8" />
			<path d="M3.6 15h8.9" />
			<path d="M11.5 3a17 17 0 0 0 0 18" />
			<path d="M12.5 3a16.986 16.986 0 0 1 2.578 9.018" />
			<path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
			<path d="M19 18v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWorldPinIcon.displayName = "TablerWorldPinIcon";
}
