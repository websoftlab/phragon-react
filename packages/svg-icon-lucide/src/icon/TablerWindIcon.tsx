import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWindIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWindIcon = React.forwardRef<SVGSVGElement, TablerWindIconProps>(function TablerWindIcon(props, ref) {
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
			<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
			<path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
			<path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWindIcon.displayName = "TablerWindIcon";
}
