import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTimerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTimerIcon = React.forwardRef<SVGSVGElement, TablerTimerIconProps>(function TablerTimerIcon(
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
			<path d="M10 2 L14 2" />
			<path d="M12 14 L15 11" />
			<path d="M20 14 A8 8 0 0 1 12 22 A8 8 0 0 1 4 14 A8 8 0 0 1 20 14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTimerIcon.displayName = "TablerTimerIcon";
}
