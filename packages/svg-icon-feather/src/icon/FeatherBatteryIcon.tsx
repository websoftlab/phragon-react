import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherBatteryIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherBatteryIcon = React.forwardRef<SVGSVGElement, FeatherBatteryIconProps>(function FeatherBatteryIcon(
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
			<rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
			<line x1="23" y1="13" x2="23" y2="11" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherBatteryIcon.displayName = "FeatherBatteryIcon";
}
