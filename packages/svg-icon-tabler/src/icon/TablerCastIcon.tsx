import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCastIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCastIcon = React.forwardRef<SVGSVGElement, TablerCastIconProps>(function TablerCastIcon(props, ref) {
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
			<path d="M3 19l.01 0" />
			<path d="M7 19a4 4 0 0 0 -4 -4" />
			<path d="M11 19a8 8 0 0 0 -8 -8" />
			<path d="M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCastIcon.displayName = "TablerCastIcon";
}
