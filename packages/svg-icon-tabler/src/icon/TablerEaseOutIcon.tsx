import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEaseOutIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEaseOutIcon = React.forwardRef<SVGSVGElement, TablerEaseOutIconProps>(function TablerEaseOutIcon(
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
			<path d="M3 20s10 -16 18 -16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEaseOutIcon.displayName = "TablerEaseOutIcon";
}
