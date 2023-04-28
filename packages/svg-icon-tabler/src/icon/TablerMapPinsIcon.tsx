import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMapPinsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMapPinsIcon = React.forwardRef<SVGSVGElement, TablerMapPinsIconProps>(function TablerMapPinsIcon(
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
			<path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
			<path d="M8 7l0 .01" />
			<path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
			<path d="M16 15l0 .01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMapPinsIcon.displayName = "TablerMapPinsIcon";
}
