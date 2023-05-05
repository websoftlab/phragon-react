import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPauseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPauseIcon = React.forwardRef<SVGSVGElement, TablerPauseIconProps>(function TablerPauseIcon(
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
			<path d="M6 4 H10 V20 H6 V4 z" />
			<path d="M14 4 H18 V20 H14 V4 z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPauseIcon.displayName = "TablerPauseIcon";
}
