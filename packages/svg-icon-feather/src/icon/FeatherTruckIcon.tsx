import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherTruckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherTruckIcon = React.forwardRef<SVGSVGElement, FeatherTruckIconProps>(function FeatherTruckIcon(
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
			<rect x="1" y="3" width="15" height="13" />
			<polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
			<circle cx="5.5" cy="18.5" r="2.5" />
			<circle cx="18.5" cy="18.5" r="2.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherTruckIcon.displayName = "FeatherTruckIcon";
}
