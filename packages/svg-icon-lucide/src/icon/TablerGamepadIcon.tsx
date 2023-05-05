import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGamepadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGamepadIcon = React.forwardRef<SVGSVGElement, TablerGamepadIconProps>(function TablerGamepadIcon(
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
			<path d="M6 12 L10 12" />
			<path d="M8 10 L8 14" />
			<path d="M15 13 L15.01 13" />
			<path d="M18 11 L18.01 11" />
			<path d="M4 6 H20 A2 2 0 0 1 22 8 V16 A2 2 0 0 1 20 18 H4 A2 2 0 0 1 2 16 V8 A2 2 0 0 1 4 6 z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGamepadIcon.displayName = "TablerGamepadIcon";
}
