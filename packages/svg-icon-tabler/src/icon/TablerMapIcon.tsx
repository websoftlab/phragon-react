import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMapIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMapIcon = React.forwardRef<SVGSVGElement, TablerMapIconProps>(function TablerMapIcon(props, ref) {
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
			<path d="M3 7l6 -3l6 3l6 -3l0 13l-6 3l-6 -3l-6 3l0 -13" />
			<path d="M9 4l0 13" />
			<path d="M15 7l0 13" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMapIcon.displayName = "TablerMapIcon";
}
