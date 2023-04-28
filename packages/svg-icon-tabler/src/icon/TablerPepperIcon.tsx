import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPepperIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPepperIcon = React.forwardRef<SVGSVGElement, TablerPepperIconProps>(function TablerPepperIcon(
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
			<path d="M13 11c0 2.21 -2.239 4 -5 4s-5 -1.79 -5 -4a8 8 0 1 0 16 0a3 3 0 0 0 -6 0" />
			<path d="M16 8c0 -2 2 -4 4 -4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPepperIcon.displayName = "TablerPepperIcon";
}
