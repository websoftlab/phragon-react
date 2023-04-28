import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMountainIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMountainIcon = React.forwardRef<SVGSVGElement, TablerMountainIconProps>(function TablerMountainIcon(
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
			<path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z" />
			<path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMountainIcon.displayName = "TablerMountainIcon";
}
