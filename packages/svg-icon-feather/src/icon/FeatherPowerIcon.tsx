import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherPowerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherPowerIcon = React.forwardRef<SVGSVGElement, FeatherPowerIconProps>(function FeatherPowerIcon(
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
			<path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
			<line x1="12" y1="2" x2="12" y2="12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherPowerIcon.displayName = "FeatherPowerIcon";
}
