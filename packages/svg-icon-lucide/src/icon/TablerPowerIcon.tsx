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
			<path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
			<path d="M12 2 L12 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPowerIcon.displayName = "TablerPowerIcon";
}
