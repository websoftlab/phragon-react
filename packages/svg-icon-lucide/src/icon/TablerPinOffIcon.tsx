import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPinOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPinOffIcon = React.forwardRef<SVGSVGElement, TablerPinOffIconProps>(function TablerPinOffIcon(
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
			<path d="M2 2 L22 22" />
			<path d="M12 17 L12 22" />
			<path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12" />
			<path d="M15 9.34V6h1a2 2 0 0 0 0-4H7.89" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPinOffIcon.displayName = "TablerPinOffIcon";
}
