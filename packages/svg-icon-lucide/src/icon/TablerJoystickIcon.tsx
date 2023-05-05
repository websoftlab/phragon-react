import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerJoystickIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerJoystickIcon = React.forwardRef<SVGSVGElement, TablerJoystickIconProps>(function TablerJoystickIcon(
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
			<path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" />
			<path d="M6 15v-2" />
			<path d="M12 15V9" />
			<path d="M15 6 A3 3 0 0 1 12 9 A3 3 0 0 1 9 6 A3 3 0 0 1 15 6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerJoystickIcon.displayName = "TablerJoystickIcon";
}
