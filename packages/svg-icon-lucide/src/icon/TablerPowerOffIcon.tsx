import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPowerOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPowerOffIcon = React.forwardRef<SVGSVGElement, TablerPowerOffIconProps>(function TablerPowerOffIcon(
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
			<path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
			<path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
			<path d="M12 2v4" />
			<path d="m2 2 20 20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPowerOffIcon.displayName = "TablerPowerOffIcon";
}
