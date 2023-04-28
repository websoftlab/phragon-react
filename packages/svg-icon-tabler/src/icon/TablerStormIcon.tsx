import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStormIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStormIcon = React.forwardRef<SVGSVGElement, TablerStormIconProps>(function TablerStormIcon(
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
			<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			<path d="M5.369 14.236c-1.839 -3.929 -1.561 -7.616 -.704 -11.236" />
			<path d="M18.63 9.76c1.837 3.928 1.561 7.615 .703 11.236" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStormIcon.displayName = "TablerStormIcon";
}
