import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCodeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCodeOffIcon = React.forwardRef<SVGSVGElement, TablerCodeOffIconProps>(function TablerCodeOffIcon(
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
			<path d="M7 8l-4 4l4 4" />
			<path d="M17 8l4 4l-2.5 2.5" />
			<path d="M14 4l-1.201 4.805m-.802 3.207l-2 7.988" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCodeOffIcon.displayName = "TablerCodeOffIcon";
}
