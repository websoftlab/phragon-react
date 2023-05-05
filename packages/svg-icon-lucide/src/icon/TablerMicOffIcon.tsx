import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMicOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMicOffIcon = React.forwardRef<SVGSVGElement, TablerMicOffIconProps>(function TablerMicOffIcon(
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
			<path d="M2 2 L22 22" />
			<path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
			<path d="M5 10v2a7 7 0 0 0 12 5" />
			<path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
			<path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
			<path d="M12 19 L12 22" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMicOffIcon.displayName = "TablerMicOffIcon";
}
