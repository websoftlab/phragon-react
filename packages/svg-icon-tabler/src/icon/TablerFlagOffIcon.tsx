import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlagOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlagOffIcon = React.forwardRef<SVGSVGElement, TablerFlagOffIconProps>(function TablerFlagOffIcon(
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
			<path d="M5 5v16" />
			<path d="M19 5v9" />
			<path d="M7.641 3.645a5 5 0 0 1 4.359 1.355a5 5 0 0 0 7 0" />
			<path d="M5 14a5 5 0 0 1 7 0a4.984 4.984 0 0 0 3.437 1.429m3.019 -.966c.19 -.14 .371 -.294 .544 -.463" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlagOffIcon.displayName = "TablerFlagOffIcon";
}
