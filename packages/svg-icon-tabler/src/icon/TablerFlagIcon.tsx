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
			<path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
			<path d="M5 21v-7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlagIcon.displayName = "TablerFlagIcon";
}
