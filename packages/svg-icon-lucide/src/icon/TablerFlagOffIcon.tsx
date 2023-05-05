import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlagOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlagOffIcon = React.forwardRef<SVGSVGElement, TablerFlagOffIconProps>(function TablerFlagOffIcon(
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
			<path d="M8 2c3 0 5 2 8 2s4-1 4-1v11" />
			<path d="M4 22V4" />
			<path d="M4 15s1-1 4-1 5 2 8 2" />
			<path d="M2 2 L22 22" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlagOffIcon.displayName = "TablerFlagOffIcon";
}
