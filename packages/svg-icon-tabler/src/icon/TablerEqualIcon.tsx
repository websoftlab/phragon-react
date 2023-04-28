import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEqualIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEqualIcon = React.forwardRef<SVGSVGElement, TablerEqualIconProps>(function TablerEqualIcon(
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
			<path d="M5 10h14" />
			<path d="M5 14h14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEqualIcon.displayName = "TablerEqualIcon";
}
