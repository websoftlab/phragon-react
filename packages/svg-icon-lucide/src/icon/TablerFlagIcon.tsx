import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlagIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlagIcon = React.forwardRef<SVGSVGElement, TablerFlagIconProps>(function TablerFlagIcon(props, ref) {
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
			<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
			<path d="M4 22 L4 15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlagIcon.displayName = "TablerFlagIcon";
}
