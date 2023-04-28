import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBikeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBikeIcon = React.forwardRef<SVGSVGElement, TablerBikeIconProps>(function TablerBikeIcon(props, ref) {
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
			<path d="M5 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M19 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M12 19l0 -4l-3 -3l5 -4l2 3l3 0" />
			<path d="M17 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBikeIcon.displayName = "TablerBikeIcon";
}
