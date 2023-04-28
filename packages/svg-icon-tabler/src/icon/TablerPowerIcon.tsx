import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPowerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPowerIcon = React.forwardRef<SVGSVGElement, TablerPowerIconProps>(function TablerPowerIcon(
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
			<path d="M7 6a7.75 7.75 0 1 0 10 0" />
			<path d="M12 4l0 8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPowerIcon.displayName = "TablerPowerIcon";
}
